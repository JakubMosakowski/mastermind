<template>
  <div v-if="isGameChosen" id="gameWrapper">
    <div v-if="!isLoading" id="gameContent">
      <Title :game-id="game.game" :name="game.name"/>
      <p>Size: {{game.size}}</p>
      <p v-if="isGameFinished()">Game is finished! Your result: {{result()}}</p>
      <Move v-else :game="game" @clicked="handleMoveClicked"/>
      <p>How many times you have tried: {{howManyTried()}}</p>
      <p>Tries left: {{stepsLeft}}</p>
    </div>
    <CustomSpinner :is-visible="isLoading"/>
  </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
import * as storage from '../commons/data/storage';
import Router from '../router';

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
      stepsLeft: 'UNKNOWN',
      isLoading: false,
    };
  },
  methods: {
    handleMoveClicked(colors) {
      const path = 'https://mastermind-server-tsw.herokuapp.com/game/move';

      const post = {
        game: this.game.game,
        move: colors.flatMap(item => item.numeric + 1),
      };
      this.isLoading = true;

      axios.post(path, post)
        .then((response) => {
          this.isLoading = false;

          if (response.data.ERROR) {
            this.gameLost();
            return;
          }

          if (response.data.game) {
            this.setupMoveResult(response.data.result);
            return;
          }

          this.setupWon();
        })
        .catch(() => {
          swal('Something went wrong', 'Could not connect to a server');
          this.isLoading = false;
        });
    },
    isGameFinished() {
      return this.game.solved || this.stepsLeft < 0;
    },
    howManyTried() {
      const result = this.game.steps - this.stepsLeft;
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(result)) {
        return 'UNKNOWN';
      }
      return result;
    },
    gameLost() {
      swal({
        title: 'You lost!',
        text: 'Maybe next time will be better?',
        icon: 'error',
      })
        .then(() => {
          storage.setObject(this.game.game, this.game);
        });
    },
    setupMoveResult(result) {
      console.log(result);
      // TODO save every try (in some map like gameid-array of tries) to local storage
    },
    setupWon() {
      swal({
        title: 'You won',
        text: 'Good job!',
        icon: 'success',
      })
        .then(() => {
          this.game.solved = true;
          storage.setObject(this.game.game, this.game);
        });
    },
    result() {
      if (this.game.solved) {
        return 'WON';
      }
      return 'LOST';
    },
  },
  mounted() {
    this.isLoading = true;
    const gameId = storage.getPrimitive(storage.currentGameId);

    if (gameId && storage.getObject(gameId)) {
      this.game = storage.getObject(gameId);
      this.isGameChosen = true;

      const path = 'https://mastermind-server-tsw.herokuapp.com/game/status';
      const post = {
        game: this.game.game,
      };

      axios.post(path, post).then((response) => {
        this.stepsLeft = response.data.stepsLeft;
      }).finally(() => {
        this.isLoading = false;
      });
    } else {
      swal({
        title: 'No games selected.',
        text: 'You didn\'t chose any game. You can create new game or find one by it\'s id.',
        icon: 'info',
      })
        .then(() => {
          Router.push({
            name: 'home',
          });
        });
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
