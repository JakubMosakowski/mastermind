<template>
<div v-visible="isVisible" id="PositiveIntegerFieldError">
  <p>You must enter a positive integer number</p>
</div>
</template>

<script>
export default {
  name: 'PositiveIntegerFieldError',
  props: ['fieldValue'],
  watch: {
    fieldValue() {
      this.validateField();
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    validateField() {
      const numericSize = parseInt(this.fieldValue, 10);
      this.isVisible = !(!Number.isNaN(numericSize)
        && Number.isInteger(numericSize)
        && numericSize > 0);
    },
  },
};
</script>

<style scoped>
  p{
    color: red;
    font-size: 13px;
    text-align: center;
  }
</style>
