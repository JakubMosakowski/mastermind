<template>
  <button id="customButton" class="btn btn-primary" @click="$emit('clicked')"> {{text}}</button>
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
