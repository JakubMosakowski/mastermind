<template>
  <p v-visible="isErrorVisible" id="fieldError">{{errorMessage}}</p>
</template>

<script>
export default {
  name: 'FieldError',
  props: {
    isErrorVisible: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
      default: 'Field cannot be zero!',
    },
  },
};
</script>

<style scoped>
  p {
    color: red;
    font-size: 13px;
    text-align: center;
  }
</style>
