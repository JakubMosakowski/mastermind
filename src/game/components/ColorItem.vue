<template>
  <div id="colorWrapper" :class="[isDisabled ? '' : clickable, isSmall ? small : '']"
       :style="{background: color}"
       @click="$emit('clicked',index,color)"></div>
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
      required: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clickable: 'clickable',
      small: 'small',
    };
  },
};
</script>

<style lang="scss" scoped>
  #colorWrapper {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 25px;
  }

  .clickable:hover {
    box-shadow: 0 0 3pt 3pt white;
  }

  .small{
    width: 15px !important;
    height: 15px !important;
  }
</style>
