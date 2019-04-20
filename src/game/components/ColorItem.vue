<template>
  <div id="colorWrapper" :style="{background: color}"></div>
</template>

<script>
// TODO pass index to color
// TODO make colors clickable
// TODO after click add color to input
export default {
  name: 'ColorItem',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  #colorWrapper {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 25px;
  }
</style>
