<template>
  <div id="customInput">
    <FieldError :field-value="value" :error-message="errorMessage"/>
    <label>
      <input :value="value" v-bind:placeholder="placeholder"
             @input="$emit('input', $event.target.value)"/>
    </label>
  </div>
</template>

<script>
import FieldError from './FieldError.vue';

export default {
  name: 'CustomInput',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    errorMessage: {
      type: String,
    },
  },
  components: {
    FieldError,
  },
};
</script>

<style scoped>
  input {
    height: 50px;
    margin: 0 0 0 0;
    border: 0;
    width: 100%;
    font-size: 15px;
    text-align: center;
    border-bottom: 1px solid white;
    transition: box-shadow .5s;
    background: none;
  }

  input:focus{
    outline: none;
    box-shadow: 0 10px 20px -8px rgba(255,255,255,0.8);
  }

  ::placeholder {
    color: black;
    font-size: 15px
  }
  input:focus::placeholder{
    color: transparent;
  }
</style>
