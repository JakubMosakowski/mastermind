<template>
  <div class="positiveIntegerInput">
      <p>{{text}}</p>
    <div class="buttonsWrapper">
      <button id="minusBtn" class="btn btn-primary" @click="minusClicked">-</button>
      <p id="value">{{value}}</p>
      <button class="btn btn-success" @click="plusClicked">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PositiveIntegerInput',
  props: {
    value: {
      type: Number,
    },
    text: {
      type: String,
    },
  },
  methods: {
    plusClicked() {
      this.$emit('input', this.value + 1);
    },
    minusClicked() {
      this.$emit('input', this.value - 1);
    },
  },
};
</script>

<style scoped>
  .positiveIntegerInput{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonsWrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #value{
    padding-left:  20px ;
    padding-right:  20px ;
    margin: auto;
  }

  button{
    width: 35px;
    height: 35px;
  }
</style>
