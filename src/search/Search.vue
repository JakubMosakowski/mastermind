<template>
  <div id="searchWrapper">
    <div v-if="!isLoading" id="contentWrapper">
      <TextInput v-model="gameId" label="Enter game id:"
                 placeholder="For example: ba84d490-6358-11e9-83a4-41cba1f52596"/>
      <CustomButton text="SEARCH!" @clicked="handleClick"/>
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

const path = 'https://mastermind-server-tsw.herokuapp.com/game/status';
const unknown = 'UNKNOWN';

export default {
  name: 'Search',
  components: {
    CustomSpinner,
    CustomButton,
    TextInput,
  },
  data() {
    return {
      gameId: '',
      isLoading: false,
    };
  },
  methods: {
    handleClick() {
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
                  localStorage.currentGameId = gameId;

                  if (!localStorage.getItem(gameId)) {
                    response.data.name = '';
                    response.data.size = unknown;
                    response.data.colors = unknown;
                    response.data.steps = unknown;
                    localStorage.setItem(gameId, JSON.stringify(response.data));
                  }
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
  },
};
</script>

<style lang="scss" scoped>
  #customButton {
    width: 100%;
    margin-top: 20px;
  }
</style>
