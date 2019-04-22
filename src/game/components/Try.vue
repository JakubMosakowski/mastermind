<template>
  <div id="tryWrapper">
    <ColorItem v-for="(color, index) in colors" :key="index"
               :color="color" :is-disabled="true"/>
  </div>
</template>

<script>
import ColorItem from './ColorItem.vue';

export default {
  name: 'Try',
  components: { ColorItem },
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  #tryWrapper{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 2px solid white;
    border-radius: 25px;
  }
</style>
