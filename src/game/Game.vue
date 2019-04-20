<template>
  <div v-if="isGameChosen" id="gameWrapper">
    <Title :game-id="game.game"/>
    <p>How many times you have tried: {{game.steps-triesLeft}}</p>
    <p>Tries left: {{triesLeft}}</p>
    <p v-if="game.solved">Game is finished!</p>
    <Move v-else :game="game"/>
  </div>
</template>

<script>
// TODO Create game site
// TODO show stats for game (how many times tried, how many left, past tries with scoring,
// TODO field for enter another try:
// TODO save every try (in some map like gameid-array of tries) to local storage
// TODO (by choosing color[colors should be very different eg. rgba/colors)
// TODO Don't let user play more if game is finished
// TODO Finished = correct or too many tries.

import swal from 'sweetalert';
import Title from './components/Title.vue';
import Move from './components/Move.vue';

export default {
  name: 'game',
  components: {
    Move,
    Title,
  },
  data() {
    return {
      isGameChosen: false,
      game: {
        game: '',
        size: 0,
        colors: 0,
        steps: 0,
        solved: false,
      },
      triesLeft: 'UNKNOWN',
    };
  },
  mounted() {
    const gameId = localStorage.currentGameId;
    if (gameId && localStorage.getItem(gameId)) {
      this.game = JSON.parse(localStorage.getItem(gameId));
      this.isGameChosen = true;
    } else {
      swal('You don\'t have any saved games.', 'Create one or search it by it\'s id!');
    }
  },
};
</script>

<style lang="scss">
  #gameWrapper {
    width: 100%;
  }

  #titleWrapper {
    padding-bottom: 20px;
  }
</style>
