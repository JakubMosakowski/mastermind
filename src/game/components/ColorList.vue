<template>
  <div id="colorListWrapper">
    <ColorItem v-for="(color, index) in colors" v-bind:key="color"
               :index="index" :color="color" @clicked="$emit('clicked',index,color)"/>
  </div>
</template>

<script>
import * as utils from '../../commons/utils/extensions';
import ColorItem from './ColorItem.vue';

export default {
  name: 'ColorList',
  components: { ColorItem },
  props: {
    colorsLength: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      colors: [],
    };
  },
  mounted() {
    this.colors = utils.getDifferentColors(this.colorsLength);
  },
};
</script>

<style scoped>
  #colorListWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
