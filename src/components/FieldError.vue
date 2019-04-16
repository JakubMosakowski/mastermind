<template>
<div v-visible="isErrorVisible" id="FieldError">
  <p>{{errorMessage}}</p>
</div>
</template>

<script>
export default {
  name: 'FieldError',
  props: [{
    isErrorVisible: {
      type: Boolean,
    },
  }, 'errorMessage'],
};
</script>

<style scoped>
  p{
    color: red;
    font-size: 13px;
    text-align: center;
  }
</style>
