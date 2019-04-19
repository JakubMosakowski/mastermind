<template>
  <div class="gameWrapper">
    <Title :game-id="game.game"/>
  </div>
</template>

<script>
// TODO Create game site
// TODO Add navbar with routing to: HOME/CURRENT GAME/CHOOSE GAME
// TODO show stats for game (how many times tried, how many left, past tries with scoring,
// TODO save stats to local storage
// TODO Don't let user play more if game is finished
// TODO Finished = correct or too many tries.
// TODO field for enter another try:
// TODO (by choosing color[colors should be very different eg. rgba/colors)
// TODO deploy on netlify

import Title from './components/Title.vue';

export default {
  name: 'game',
  components: { Title },
  props: {
    game: {
      type: Object,
    },
  },
};
</script>

<style>
  .gameWrapper {

  }
</style>
