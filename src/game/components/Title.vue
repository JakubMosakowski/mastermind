<template>
  <div id="titleWrapper">
    <h3 >Your game number: </h3>
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
  },
};
</script>

<style scoped>
  *{
    text-align: center;
  }
</style>
