<template>
  <div id="colorWrapper" :style="{background: color}" @click="$emit('clicked',index,color)"></div>
</template>

<script>
export default {
  name: 'ColorItem',
  props: {
    color: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
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

  #colorWrapper:hover {
    box-shadow: 0 0 3pt 3pt white;
  }
</style>
