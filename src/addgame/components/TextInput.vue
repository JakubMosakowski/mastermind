<template>
  <label v-if="label !== ''">
    {{ label }}
    <input type="text" :placeholder="placeholder"
           :value="value" @input="$emit('input', $event.target.value)"/>
  </label>
</template>

<script>

export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: String,
  },
};
</script>

<style scoped>

</style>
