<template>
  <div id="separator"></div>
</template>

<script>
export default {
  name: 'Separator',
};
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  #separator {
    width: 100%;
    height: 2px;
    background: $primary-color;
  }
</style>
