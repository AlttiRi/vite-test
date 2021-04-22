<template>
<span class="tag input-tag">
    <span class="content"
          ref="input"
          contenteditable="true"
          data-placeholder="+"

          @keydown.space.shift.prevent="$event.stopImmediatePropagation(), onSpaceShift($event)"
          @keydown.space.prevent="onSubmitNewTag"
          @keydown.enter.prevent="onSubmitNewTag"
          @keydown.backspace.ctrl="$event.stopImmediatePropagation(), onBackspaceCtrl($event)"
          @keydown.backspace="onBackspace"

          @input="onInput"

    ></span>
</span>
</template>

<script>
export default {
  name: "InputTagNew",
  props: ["modelValue"],
  emits: ["update:modelValue", "submit-new-tag", "backspace", "backspace-ctrl"],
  mounted() {
    this.$refs.input.innerText = this.modelValue;
  },

  methods: {
    onInput(event) {
      const inputText = event.target.innerText;
      const elem = this.$refs.input;

      let hText = inputText
          .replaceAll(/[\s\n]+/g, " ")
          .trim();
      const parts = hText.split(" ");
      if (parts.length > 1) {
        parts
            .forEach(part => {
              part = replaceUnderScore(part, true);
              this.$emit("submit-new-tag", part);
            });
        elem.innerText = "";
        return;
      }

      function replaceUnderScore(hText, replaceOnly = false) {
        function _replaceUnderScore() {
          hText = hText.replaceAll("__", "_");
          if (replaceOnly) {
            return;
          }

          const {anchorOffset} = window.getSelection();
          elem.innerText = hText;

          let offset = anchorOffset - 1; // do not move the caret
          if (hText.charAt(anchorOffset + 1) === "_" || hText.length === anchorOffset) {
            offset = offset + 1;
          }

          moveCursor(offset);
        }
        // if after replacement creates a new "__". For example: "ab_c_de" and you replace "c" with "_".
        while (hText.includes("__")) {
          _replaceUnderScore();
        }
        return hText;
      }

      hText = replaceUnderScore(hText);
      this.$emit("update:modelValue", hText);
    },
    onSpaceShift() {
      // pasteInCursorPosition(); // todo?
      document.execCommand("insertText", false, "_");
      console.log("onSpaceShift");
    },
    onSubmitNewTag() {
      console.log("onSubmitNewTag");
      const elem = this.$refs.input;
      if (elem.innerText) {
        this.$emit("submit-new-tag", elem.innerText);
      }
    },
    onBackspace(event) {
      console.log("onBackspace");
      if (!event.target.innerText) {
        event.preventDefault();
        this.$emit("backspace");
      }
    },
    onBackspaceCtrl(event) {
      console.log("onBackspaceCtrl");
      if (!event.target.innerText) {
        this.$emit("backspace-ctrl");
      }
    },
  },
  watch: {
    async modelValue(newValue, oldValue) {
      const elem = this.$refs.input;
      if (elem.innerText !== newValue && newValue !== undefined) {
        elem.innerText = newValue;
        moveCursor(newValue.length);
      }
    }
  }
};

function moveCursor(offset = 0, selection = window.getSelection()) {
  if (!offset) {
    return;
  }
  const range = new Range();
  const textNode = selection.anchorNode.childNodes[0] ?? selection.anchorNode;

  if (!textNode) {
    console.log("!textNode");
    return;
  }

  let _offset = selection.anchorOffset + offset;
  _offset = _offset < 0 ? 0 : _offset;

  range.setStart(textNode, _offset);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
}



function setCursorToEnd(elem) {
  const range = new Range();

  console.log(window.getSelection().anchorNode === elem);

  const textNode = elem.childNodes[0];
  if (!textNode) { return; }

  range.setStart(textNode, elem.innerText.length);
  range.collapse(true);
  const selection = window.getSelection();

  selection.removeAllRanges();
  selection.addRange(range);
  console.log("setCursorToEnd");
}



</script>

<style scoped>
.tag {
  flex-grow: 2;
  min-width: 48px;
}
.content {
  width: 100%;
}

[contenteditable=true]:not(:focus):empty:before {
  content: attr(data-placeholder);
  pointer-events: none;
  display: inline-block;
  color: darkgray;
}
[contenteditable=true]:focus:before {
  content: "";
}
</style>