<template lang="pug">
div.text-area-component
  label
    textarea(placeholder="Type a text here" v-model="text")
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "TextArea",
  computed: {
    ...mapState("textarea", {
      _text: state => state.textarea,
    }),
    text: {
      get() {
        return this._text;
      },
      set(value) {
        this.setText(value);
      }
    }
  },
  methods: {
    ...mapMutations("textarea", ["setText"])
  }
}
</script>

<style lang="scss" scoped>
.text-area-component {
  border: solid 1px var(--textarea-wrapper-border);
  box-sizing: border-box;
  width: 100%;
  textarea {
    width: 100%;
    box-sizing: border-box;
    height: calc(100% - 1px); // firefox bug
    border: 0;
    outline: none;
    padding: 5px;
    font-size: 17px;
    &:focus::placeholder {
      opacity: 0;
      transition: opacity 0.25s ease;
    }
  }
}
</style>