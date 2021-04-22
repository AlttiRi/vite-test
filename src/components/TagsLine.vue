<template>
  <div class="tags-line">
    <Tag v-for="(tag, index) of tags"
         :text="tag"
         :index="index"
         @delete-tag="onDeleteTag"
    />
    <InputTag
        @submit-new-tag="onSubmitNewTag"
        @backspace="onBackspace"
        @backspace-ctrl="onBackspaceCtrl"
        v-model="inputTagText"
    />
  </div>
</template>

<script>
import Tag from "./Tag.vue";
import InputTag from "./InputTag.vue";

export default {
  props: ["tags", "initInputTagText"],
  name: "TagsLine",
  components: {Tag, InputTag},
  data() {
    return {
      inputTagText: this.initInputTagText || "",
    }
  },
  methods: {
    onSubmitNewTag(value) {
      this.tags.push(value);
      this.inputTagText = "";
    },
    onBackspace() {
      this.inputTagText = this.tags.pop();
    },
    onBackspaceCtrl() {
      this.tags.pop();
    },
    onDeleteTag(index) {
      this.tags.splice(index, 1);
    }
  },
}


</script>

<style scoped>

::v-deep(.tag) {
  display: flex;
}

::v-deep([contenteditable]) {
  border-bottom: 1px transparent inset;
  border-top: 1px transparent inset;
}

::v-deep(.tag:not(.input-tag)) {
  padding: 2px 6px;
  border: gray 1px solid;
  border-radius: 2px;
  margin: 1px;
  background-image: linear-gradient(to top, rgba(0,0,0,0.1), rgba(255,255,255,0.55));
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
::v-deep(.input-tag) {
  border: 4px transparent solid;
  padding-left: 2px;
  margin-left: 2px;
}
::v-deep(.input-tag [contenteditable]:focus) {
  border-bottom: 1px grey solid;
}
::v-deep([contenteditable]) {
  outline: 0 solid transparent;
}



.tags-line {
  display: flex;
  flex-wrap: wrap;
  max-width: 480px;
  min-width: 320px;
}
</style>