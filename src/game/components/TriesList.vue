<template>
  <div v-if="results.length!==0" id="triesListWrapper">
    <h5>Your previous moves: </h5>
    <Separator/>
    <template id="itemsWrapper" v-for="(result,index) in results.slice().reverse()">
      <MoveScore :result="result" :key="index+1"/>
      <Separator v-if="index !== results.length-1" :key="-1*(1+index)"/>
    </template>
  </div>
</template>

<script>
import MoveScore from './MoveScore.vue';
import Separator from './Separator.vue';

export default {
  name: 'TriesList',
  components: {
    Separator,
    MoveScore,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';

  #triesListWrapper {
    border: 3px solid $primary-color;
    border-radius: 10px;
    padding: 20px;
  }

  #separator:first-of-type {
    margin-top: 0;
  }

  #separator {
    margin-top: 25px;
    margin-bottom: 25px;
  }
</style>
