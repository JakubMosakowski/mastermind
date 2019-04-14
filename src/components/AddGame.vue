<template>
  <div class="wrapper">
    <h3>Input game parameters:</h3>
    <label for="size">Size of a game:</label>
    <input id="size" v-model="size"/>

    <label for="colors">Number of colors:</label>
    <input id="colors" v-model="colors"/>

    <label for="tries">Number of tries until loose:</label>
    <input id="tries" v-model="tries"/>

    <button id="create" @click="handleInput">Create game!</button>
  </div>
</template>

<script>
import axios from 'axios';
import Router from '../router';

const path = 'http://localhost:3000/game/new';

export default {
  name: 'AddGame',
  data() {
    return {
      size: '',
      colors: '',
      tries: '',
    };
  },
  methods: {
    handleInput() {
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
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
      // TODO below
      // Go to site with game.
      // Create game site
      // show id to user
      // show stats for game (how many times tried, how many left, past tries with scoring,
      // save stats to local storage
      // Don't let user play more if game is finished
      // Finished = correct or too many tries.
      // field for enter another try:
      // (by choosing color[colors should be very different eg. rgba/colors)
    },
  },
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: center;
    margin: 0 auto;
    padding: 30px;
    width: 350px;
  }

  input {
    height: 30px;
    margin: 20px 0 20px 0;
    border: 0;
    width: 100%;
    border-bottom: 1px solid black;
  }

  button {

  }
</style>
