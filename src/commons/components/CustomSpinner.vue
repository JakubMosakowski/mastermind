<template>
  <b-spinner v-if="isVisible" variant="primary" label="Spinning" id="spinner"/>
</template>

<script>
export default {
  name: 'CustomSpinner',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
  #spinner {
    position: fixed;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
    width: 90px;
    height: 90px;
  }
</style>
