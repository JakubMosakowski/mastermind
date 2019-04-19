<template>
  <div class="wrapper">
    <div v-if="!isLoading" id="inputs">
      <h2>Input game parameters:</h2>

      <IntegerInput v-model="size" text="Size of a game:"
                    :is-error-visible="errors[0].isError"/>
      <IntegerInput v-model="colors" text="Number of colors:"
                    :is-error-visible="errors[1].isError"/>
      <IntegerInput v-model="tries" text="Number of tries until loose:" basicValue="INFINITE"/>

      <CustomButton text="Create game!" @clicked="handleClick"/>
    </div>
    <b-spinner v-if="isLoading" variant="primary" label="Spinning" id="spinner"></b-spinner>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Router from '../router';
import IntegerInput from './IntegerInput.vue';
import CustomButton from './CustomButton.vue';

const path = 'https://mastermind-server-tsw.herokuapp.com/game/new';

export default {
  name: 'AddGame',
  components: {
    CustomButton,
    IntegerInput,
  },
  methods: {
    handleClick() {
      this.clearErrors();

      if (this.size === 0) {
        this.errors[0].isError = true;
      }

      if (this.colors === 0) {
        this.errors[1].isError = true;
      }

      if (this.thereIsAnyError()) {
        return;
      }
      if (this.tries === 0) this.tries = null;

      const post = this.getPost();

      this.isLoading = true;
      axios.post(path, post)
        .then((response) => {
          this.isLoading = false;

          Router.push({
            name: 'game',
            params: { game: response.data },
          });
        })
        .catch(() => {
          swal('Something went wrong', 'Could not connect to a server');
        });
    },
    clearErrors() {
      this.errors = this.errors.map(key => [key, false]);
    },
    thereIsAnyError() {
      return this.errors.some(item => item.isError === true);
    },
    getPost() {
      if (this.tries === null) {
        return {
          size: this.size,
          colors: this.colors,
        };
      }
      return {
        size: this.size,
        colors: this.colors,
        steps: this.tries,
      };
    },
  },
  data() {
    return {
      size: 0,
      colors: 0,
      tries: 0,
      isLoading: false,
      SIZE_ERROR: 'size_error',
      COLORS_ERROR: 'colors_error',
      errorMessage: 'You must enter a positive integer number',
      errors: [
        {
          name: this.SIZE_ERROR,
          isError: false,
        },
        {
          name: this.COLORS_ERROR,
          isError: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  #customButton {
    width: 100%;
  }

  .integerInput {
    margin-bottom: 20px;
  }

  #spinner {
    position: fixed;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
    width: 90px;
    height: 90px;
  }

  h3 {
    margin-bottom: 20px;
  }
</style>
