<template>
  <div id="gameListWrapper">
    <h5>Saved games: </h5>
    <GameItem v-for="item in games" :key="item.game" :game="item"
              @clicked="$emit('clicked', item)"/>
  </div>

</template>

<script>
import GameItem from './GameItem.vue';

export default {
  name: 'GameList',
  components: { GameItem },
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  h5 {
    text-align: center;
    margin-bottom: 10px;
  }

</style>
