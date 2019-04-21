<template>
  <div id="moveWrapper">
    <ColorsInput :colors="getColors()" @clicked="handleColorRemoveClick"/>
    <ColorList :colors-length="game.colors" @clicked="handleColorClick"/>
    <CustomButton text="Move" @clicked="$emit('clicked',colors)"/>
  </div>
</template>

<script>
import ColorList from './ColorList.vue';
import ColorsInput from './ColorsInput.vue';
import CustomButton from '../../commons/components/CustomButton.vue';

export default {
  name: 'Move',
  components: {
    CustomButton,
    ColorsInput,
    ColorList,
  },
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colors: [],
    };
  },
  methods: {
    handleColorRemoveClick(index) {
      this.colors.splice(index, 1);
    },
    handleColorClick(index, colorValue) {
      if (this.colors.length === this.game.size) {
        return;
      }
      this.colors.push(
        {
          numeric: index,
          color: colorValue,
        },
      );
    },
    getColors() {
      return this.colors.flatMap(item => item.color);
    },
  },
};
</script>

<style lang="scss" scoped>
  #moveWrapper {
    width: 100%;
  }

  #colorInputWrapper {
    margin-bottom: 10px;
  }

  #customButton {
    width: 100%;
    margin: 20px auto;
  }

</style>
