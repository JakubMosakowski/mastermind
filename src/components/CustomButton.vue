<template>
  <a id="customButton" class="action-button shadow animate blue" @click="$emit('clicked')">
    {{text}}
  </a>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>

  .animate
  {
    transition: all 0.1s;
    -webkit-transition: all 0.1s;
  }

  .action-button
  {
    position: relative;
    padding: 10px 40px;
    margin: 50px 10px 10px 0;
    float: left;
    border-radius: 10px;
    font-size: 20px;
    color: #FFF;
    text-decoration: none;
  }

  .blue
  {
    background-color: #3498DB;
    border-bottom: 5px solid #2980B9;
    text-shadow: 0 -2px #2980B9;
  }

  .action-button:active
  {
    transform: translate(0px,5px);
    -webkit-transform: translate(0px,5px);
    border-bottom: 1px solid;
  }
</style>
