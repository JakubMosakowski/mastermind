<template>
  <button id="customButton" :disabled="!isEnabled"
          class="btn btn-primary" @click="$emit('clicked')"> {{text}}</button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
