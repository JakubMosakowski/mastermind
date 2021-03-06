<template>
  <div id="addGameWrapper">
    <div v-if="!isLoading" id="inputsWrapper">
      <h2>Input game parameters:</h2>

      <TextInput v-model="gameName" label="Enter name for game"
                 placeholder="For example: Bob vs Uncle"/>
      <IntegerInput v-model="size" text="Size of a game:"
                    :is-error-visible="errors[0].isError"/>
      <IntegerInput v-model="colors" text="Number of colors:"
                    :is-error-visible="errors[1].isError"/>
      <IntegerInput v-model="tries" text="Number of tries until loose:" basicValue="INFINITE"/>

      <CustomButton text="Create game!" @clicked="handleClick"/>
    </div>
    <CustomSpinner :isVisible="isLoading"/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Router from '../router';
import IntegerInput from './components/IntegerInput.vue';
import CustomButton from '../commons/components/CustomButton.vue';
import TextInput from '../commons/components/TextInput.vue';
import CustomSpinner from '../commons/components/CustomSpinner.vue';
import * as storage from '../commons/data/storage';

const path = 'https://mastermind-server-tsw.herokuapp.com/game/new';

export default {
  name: 'AddGame',
  components: {
    CustomSpinner,
    TextInput,
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

      const post = this.getPost();
      this.isLoading = true;

      axios.post(path, post)
        .then((response) => {
          response.data.solved = false;
          response.data.name = this.gameName;
          storage.setObject(response.data.game, response.data);
          storage.setPrimitive(storage.currentGameId, response.data.game);

          this.isLoading = false;
          Router.push({
            name: 'game',
          });
        })
        .catch(() => {
          swal('Something went wrong', 'Could not connect to a server');
          this.isLoading = false;
        });
    },
    clearErrors() {
      this.errors = this.errors.map(key => [key, false]);
    },
    thereIsAnyError() {
      return this.errors.some(item => item.isError === true);
    },
    getPost() {
      if (this.tries === 0) {
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
      gameName: '',
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
    margin-top: 20px;
  }

  #integerInputWrapper {
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 1.5em;
      margin: 0.83em 0;
    }
  }

  #inputsWrapper {
    width: 100%;
  }
</style>
