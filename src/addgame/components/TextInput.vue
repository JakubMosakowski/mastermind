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
  label {
    width: 100%;
    text-align: center;
  }

  input {
    background: transparent;
    border: 0;
    display: block;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  input:hover {
    outline: none;
    -webkit-box-shadow: 0 5px 10px 0 white;
    -moz-box-shadow: 0 5px 10px 0 white;
    box-shadow: 0 5px 10px 0 white;
  }

  input::placeholder {
    text-align: center;
  }
</style>
