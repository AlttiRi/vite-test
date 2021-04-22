<template>
<span class="tag">
  <span class="content"
      :href="`#` + text"
      @contextmenu.prevent="onContextMenu"
      contenteditable="false"
  >{{text}}</span>
</span>
</template>

<script>

export default {
  props:["text", "index"],
  emits: ["delete-tag"],
  name: "Tag",
  methods: {
    onContextMenu() {
      console.log("onContextMenu");
      this.$emit("delete-tag", this.index);
    },
  }
}
</script>

<style scoped>

</style>