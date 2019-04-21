<template>
  <div id="titleWrapper">
    <h3 v-if="name !== ''">{{name}}</h3>
    <h6>{{ gameId }}</h6>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    gameId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
  * {
    text-align: center;
  }
</style>
