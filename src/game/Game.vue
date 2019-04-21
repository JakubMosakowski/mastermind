<template>
  <div v-if="isGameChosen" id="gameWrapper">
    <div v-if="!isLoading" id="gameContent">
      <Title :game-id="game.game" :name="game.name"/>
      <p>Size: {{game.size}}</p>
      <p v-if="game.solved">Game is finished!</p>
      <Move v-else :game="game" @clicked="handleMoveClicked"/>
      <p>How many times you have tried: {{game.steps-triesLeft}}</p>
      <p>Tries left: {{triesLeft}}</p>
    </div>
    <CustomSpinner :is-visible="isLoading"/>
  </div>
</template>

<script>
// TODO show stats for game (how many times tried, how many left, past tries with scoring)
// TODO save every try (in some map like gameid-array of tries) to local storage
// TODO handle next move (with info that you won or not)
// TODO Don't let user play more if game is finished
// TODO Finished = correct or too many tries.

import swal from 'sweetalert';
import Title from './components/Title.vue';
import Move from './components/Move.vue';
import CustomSpinner from '../commons/components/CustomSpinner.vue';

export default {
  name: 'game',
  components: {
    CustomSpinner,
    Move,
    Title,
  },
  data() {
    return {
      isGameChosen: false,
      game: {
        name: '',
        game: '',
        size: 0,
        colors: 0,
        steps: 0,
        solved: false,
      },
      triesLeft: 'UNKNOWN',
      isLoading: false,
    };
  },
  methods: {
    handleMoveClicked(colors) {
      console.log(colors);
    },
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
  #gameContent {
    width: 100%;
  }

  #moveWrapper {
    margin-bottom: 40px;
  }

  p {
    text-align: center;
  }
</style>
