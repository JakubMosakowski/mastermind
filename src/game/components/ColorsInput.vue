<template>
  <div id="colorInputWrapper">
    <h5>Your current move: </h5>
    <div id="itemsWrapper">
      <ColorItem v-for="(color, index) in colors" v-bind:key="index"
                 :index="index" :color="color" @clicked="$emit('clicked',index,color)"/>
    </div>
  </div>
</template>

<script>
import ColorItem from './ColorItem.vue';

export default {
  name: 'ColorsInput',
  components: { ColorItem },
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  #itemsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid white;
    border-radius: 30px;
    min-height: 44px;
    justify-content: center;
  }

  h5 {
    text-align: center;
  }
</style>
