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

</style>
