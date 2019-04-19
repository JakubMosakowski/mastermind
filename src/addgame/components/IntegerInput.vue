<template>
  <div id="integerInputWrapper">
    <p id="title">{{text}}</p>
    <FieldError :is-error-visible="isErrorVisible"/>
    <div id="buttonsWrapper">
      <button v-visible="value > 0" id="minusBtn"
              class="btn btn-custom" @click="minusClicked">-
      </button>
      <p id="value">{{getValue()}}</p>
      <button class="btn btn-custom" @click="plusClicked">+</button>
    </div>
  </div>
</template>

<script>
import FieldError from './FieldError.vue';

export default {
  name: 'IntegerInput',
  components: { FieldError },
  props: {
    value: {
      type: Number,
    },
    text: {
      type: String,
    },
    basicValue: {
      type: String,
      default: '0',
    },
    isErrorVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    plusClicked() {
      this.$emit('input', this.value + 1);
    },
    minusClicked() {
      this.$emit('input', this.value - 1);
    },
    getValue() {
      if (this.value === 0) {
        return this.basicValue;
      }
      return this.value;
    },
  },
};
</script>

<style scoped>
  #integerInputWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #buttonsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #value {
    width: 120px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
  }

  button {
    width: 35px;
    height: 35px;
  }

  #title {
    margin: 0;
  }
</style>
