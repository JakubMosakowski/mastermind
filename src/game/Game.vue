<template>
  <div v-if="isGameChosen" id="gameWrapper">
    <div v-if="!isLoading" id="gameContent">
      <Title :game-id="game.game" :name="game.name"/>
      <p>Size: {{game.size}}</p>
      <p v-if="isGameFinished()">Game is finished! Your result: {{result()}}</p>
      <Move v-else :game="game" @clicked="handleMoveClicked"/>
      <p>How many times you have tried: {{triedCount}}</p>
      <p>Tries left: {{stepsLeft}}</p>
      <TriesList :results="results" :colors="game.colors"/>
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
import TriesList from './components/TriesList.vue';

export default {
  name: 'game',
  components: {
    TriesList,
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
      triedCount: 0,
      results: [],
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

          if (response.data.game) {
            this.setupMoveResult(response.data);
            return;
          }

          this.setupWon(response.data.tried);
        })
        .catch(() => {
          swal('Something went wrong', 'Could not connect to a server');
          this.isLoading = false;
        });
    },
    isGameFinished() {
      return this.game.solved || this.stepsLeft < 1;
    },
    setupMoveResult(data) {
      this.triedCount = data.tried;
      this.stepsLeft = data.stepsLeft;
      // TODO save every try (in some map like gameid-array of tries) to local storage
    },
    setupWon(tried) {
      swal({
        title: 'You won',
        text: 'Good job!',
        icon: 'success',
      })
        .then(() => {
          this.game.solved = true;
          this.triedCount = tried;
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
    // TODO remove that mocks!
    this.results = [
      {
        black: 25,
        white: 8,
        try: ['#FF0011', '#FF0011', '#FF0011', '#155911', '#559911'],
      },
      {
        black: 0,
        white: 2,
        try: ['#559911', '#155911', '#FF0011', '#155911', '#559911'],
      },
    ];

    if (gameId && storage.getObject(gameId)) {
      this.game = storage.getObject(gameId);
      this.isGameChosen = true;

      const path = 'https://mastermind-server-tsw.herokuapp.com/game/status';
      const post = {
        game: this.game.game,
      };

      axios.post(path, post)
        .then((response) => {
          this.stepsLeft = response.data.stepsLeft;
          this.triedCount = response.data.tried;
        })
        .finally(() => {
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
    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }
</style>
