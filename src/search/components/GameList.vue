<template>
  <div id="gameListWrapper">
    <h5>Saved games: </h5>
    <ul>
      <li v-for="item in games" :key="item.game">
        <GameItem :game="item" @clicked="$emit('clicked', item)"/>
      </li>
    </ul>
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

  li{
    list-style-type: none;
  }

  ul{
    padding-left: 0;
  }

</style>
