<template>
  <div id="moveScoreWrapper">
    <div id="score">
      <p>Score: </p>
      <ColorItem v-for="(color,index) in getListOfColor(result.white,'#FFFFFF')"
                 :color="color" :key="index" :is-small="true" :is-disabled="true"/>
      <ColorItem v-for="(color,index) in getListOfColor(result.black,'#000000')"
                 :color="color" :key="-1*(index+1)" :is-small="true" :is-disabled="true"/>
    </div>
    <Try :colors="result.try"/>
  </div>
</template>

<script>
import Try from './Try.vue';
import ColorItem from './ColorItem.vue';

export default {
  name: 'MoveScore',
  components: {
    ColorItem,
    Try,
  },
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getListOfColor(number, color) {
      const result = [];
      for (let i = 0; i < number; i += 1) {
        result.push(color);
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
  #score{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  p{
    padding-right: 5px;
  }

  #colorWrapper{
    margin-bottom: 1rem;
  }
</style>
