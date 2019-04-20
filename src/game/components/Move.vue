<template>
  <div id="moveWrapper">
    <ColorsInput/>
    <ColorList :colors-length="game.colors"/>
  </div>
</template>

<script>
import ColorList from './ColorList.vue';
import ColorsInput from './ColorsInput.vue';

export default {
  name: 'Move',
  components: { ColorsInput, ColorList },
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
