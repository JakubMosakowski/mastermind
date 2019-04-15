<template>
  <div class="wrapper">
    <h3>Input game parameters:</h3>
    <CustomInput id="size" v-model="size" placeholder="Size of a game:"/>
    <CustomInput id="colors" v-model="colors" placeholder="Number of colors:"/>
    <CustomInput id="tries" v-model="tries" placeholder="Number of tries until loose:"/>

    <CustomButton text="Create game!" @clicked="handleClick"/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Router from '../router';
import CustomInput from './CustomInput.vue';
import CustomButton from './CustomButton.vue';

const path = 'http://localhost:3000/game/new';

export default {
  name: 'AddGame',
  components: {
    CustomButton,
    CustomInput,
  },
  methods: {
    handleClick() {
      // Update mapOfCorrectness przy zmianie w positiveIntegerFieldError.
      // If all inputs are true git
      console.log(this.size);
      console.log(this.colors);
      console.log(this.tries);
      axios.post(path,
        {
          size: this.size,
          colors: this.colors,
          steps: this.tries,
        })
        .then((response) => {
          console.log(response);
          Router.replace('Game');
        })
        .catch(() => {
          swal('Something went wrong', 'Could not connect to a server');
        });
      // TODO Field validation (size, colors numbers > 0, tries number>0 or empty) on button click
      // TODO Go to site with game.
      // TODO Create game site
      // TODO show id to user
      // TODO show stats for game (how many times tried, how many left, past tries with scoring,
      // TODO save stats to local storage
      // TODO Don't let user play more if game is finished
      // TODO Finished = correct or too many tries.
      // TODO field for enter another try:
      // TODO (by choosing color[colors should be very different eg. rgba/colors)
    },
  },
  data() {
    return {
      size: '',
      colors: '',
      tries: '',
    };
  },
};
</script>

<style lang="scss" scoped>

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: center;
    margin: 0 auto;
    padding: 30px;
    width: 350px;
    flex: 1 0 auto;
  }
</style>
