<template>
  <div class="container">

    <TagsLine :tags="demoTags" :initInputTagText="`new_tag`"/>

    <hr>

    <div class="textarea-wrapper">
      <TextArea/>
    </div>

    <div v-for="(line, index) of linesComputed">
      <Row :content="line" :index="index"/>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex";
import Row from "./Row.vue";
import TagsLine from "./TagsLine.vue";
import TextArea from "./TextArea.vue";

export default {
  name: "Main",
  data() {
    return {
      demoTags: ["tag"]
    }
  },
  components: {Row, TextArea, TagsLine},
  computed: {
    ...mapState("textarea", {
      textarea: state => state.textarea,
    }),
    linesComputed() {
      const lines = this.textarea.split("\n");
      return lines.filter(line => line.trim());
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  min-width: 280px;
  .textarea-wrapper {
    min-height: 120px;
    display: grid;
  }
}
</style>