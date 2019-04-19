<template>
  <div class="game">
    <div id="titles" v-if=" game !== undefined ">
      <h3 >Your game number: </h3>
      <h6>{{ game.game }}</h6>
    </div>
    <router-link :to="{ name: 'home' }">home</router-link>
  </div>
</template>

<script>
// TODO Create game site
// TODO show stats for game (how many times tried, how many left, past tries with scoring,
// TODO save stats to local storage
// TODO Don't let user play more if game is finished
// TODO Finished = correct or too many tries.
// TODO field for enter another try:
// TODO (by choosing color[colors should be very different eg. rgba/colors)
// TODO deploy on netlify

export default {
  name: 'game',
  props: {
    game: {
      type: Object,
    },
  },
};
</script>

<style>
  .game{

  }
</style>
