<template>
  <div id="searchWrapper">
    <div v-if="!isLoading" id="contentWrapper">
      <TextInput v-model="gameId" label="Enter game id:"
                 placeholder="For example: ba84d490-6358-11e9-83a4-41cba1f52596"/>
      <CustomButton text="SEARCH!" @clicked="handleSearchClick"/>

      <ul id="example-1">
        <li v-for="item in savedGames" :key="item.game">
          <GameItem :game="item" @clicked="handleItemClicked"/>
        </li>
      </ul>
    </div>
    <CustomSpinner :isVisible="isLoading"/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import TextInput from '../commons/components/TextInput.vue';
import CustomButton from '../commons/components/CustomButton.vue';
import CustomSpinner from '../commons/components/CustomSpinner.vue';
import * as utils from '../commons/utils/extensions';
import GameItem from './components/GameItem.vue';

const path = 'https://mastermind-server-tsw.herokuapp.com/game/status';
const unknown = 'UNKNOWN';

export default {
  name: 'Search',
  components: {
    GameItem,
    CustomSpinner,
    CustomButton,
    TextInput,
  },
  data() {
    return {
      gameId: '',
      isLoading: false,
      savedGames: [],
    };
  },
  mounted() {
    this.savedGames = utils.getAllGamesFromStorage();
  },
  methods: {
    handleSearchClick() {
      const post = {
        game: this.gameId,
      };

      this.isLoading = true;
      axios.post(path, post)
        .then((response) => {
          const gameId = response.data.game;

          if (gameId) {
            swal({
              title: 'We found your game!',
              text: `This game is ${this.isFinishedText(response.data.solved)} Do you want to set it as your current game?`,
              icon: 'success',
              buttons: true,
            })
              .then((replaceCurrentGame) => {
                if (replaceCurrentGame) {
                  this.setupGame(response.data);
                }
              });
          } else {
            swal('Sorry!', 'There is no such game in our database.');
          }

          this.isLoading = false;
        })
        .catch(() => {
          swal('Something went wrong', 'Could not connect to a server');
          this.isLoading = false;
        });
    },
    isFinishedText(isFinished) {
      if (isFinished) {
        return 'finished.';
      }

      return 'still going on!';
    },
    handleItemClicked(item) {
      swal({
        title: 'You have chosen a game!',
        text: `This game is ${this.isFinishedText(item.solved)} Do you want to set it as your current game?`,
        icon: 'success',
        buttons: true,
      })
        .then((replaceCurrentGame) => {
          if (replaceCurrentGame) {
            this.setupGame(item);
          }
        });
    },
    setupGame(data) {
      const passedData = data;
      const gameId = data.game;
      localStorage.currentGameId = gameId;

      if (!localStorage.getItem(gameId)) {
        passedData.name = '';
        passedData.size = unknown;
        passedData.colors = unknown;
        passedData.steps = unknown;
        localStorage.setItem(gameId, JSON.stringify(passedData));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  #customButton {
    width: 100%;
    margin-top: 20px;
  }
</style>
