<template>
  <div class="row">
    <i>{{index}}</i> — <b>{{content}}</b>
    <TagsLine :tags="tags"/>
  </div>
</template>

<script>
import TagsLine from "./TagsLine.vue";
export default {
  name: "Row",
  components: {TagsLine},
  props: {
    content: String,
    index: Number
  },
  data() {
    return {
      tags: ["demo", "site"]
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: 8px;
}
</style>