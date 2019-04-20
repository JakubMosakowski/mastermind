<template>
  <div id="gameItemWrapper" @click="$emit('clicked',game)">
    <p>{{getName()}}</p>
  </div>
</template>

<script>
export default {
  name: 'GameItem',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getName() {
      if (this.game.name === '') {
        return this.game.game;
      }
      return this.game.name;
    },
  },
};
</script>

<style scoped>
  p{
    padding: 10px;
    border: solid 1px white;
    border-radius: 20px;
    text-align: center;
  }

  p:hover {
    outline: none;
    box-shadow: 0 14px 28px white, 0 10px 10px white;
    -webkit-box-shadow: 0 14px 28px white, 0 10px 10px white;
    -moz-box-shadow: 0 14px 28px white, 0 10px 10px white;
    cursor: pointer;
  }

  #gameItemWrapper{
    width: 100%;
  }

</style>
