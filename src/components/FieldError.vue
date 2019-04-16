<template>
<div v-visible="isVisible" id="FieldError">
  <p>{{errorMessage}}</p>
</div>
</template>

<script>
export default {
  name: 'FieldError',
  props: ['fieldValue', 'errorMessage'],
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
