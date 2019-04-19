<template>
  <div v-if="isGameChosen" id="gameWrapper">
    <Title :game-id="game.game"/>
  </div>
</template>

<script>
// TODO Create game site
// TODO Add search for setting a new current game
// TODO show stats for game (how many times tried, how many left, past tries with scoring,
// TODO save every try (in some map like gameid-array of tries) to local storage
// TODO user can either search in input or by choosing game by id)
// TODO add input for game name
// TODO Don't let user play more if game is finished
// TODO Finished = correct or too many tries.
// TODO field for enter another try:
// TODO (by choosing color[colors should be very different eg. rgba/colors)
// TODO deploy on netlify

import swal from 'sweetalert';
import Title from './components/Title.vue';

export default {
  name: 'game',
  components: { Title },
  data() {
    return {
      isGameChosen: false,
      game: {
        game: 'GAME IS EMPTY',
        size: 0,
        colors: 0,
        steps: 0,
        solved: false,
      },
    };
  },
  mounted() {
    const gameId = localStorage.currentGameId;
    if (gameId && localStorage.getItem(gameId)) {
      this.game = JSON.parse(localStorage.getItem(gameId));
      this.isGameChosen = true;
      console.log(this.game);
    } else {
      swal('You don\'t have any saved games.', 'Create one or search it by it\'s id!');
    }
  },
};
</script>

<style>
  #gameWrapper {

  }
</style>
