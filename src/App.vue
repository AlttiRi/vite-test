<template lang="pug">
Main
</template>

<script>
import Main from "./components/Main.vue";
export default {
  components: {Main}
}
</script>

<style lang="css">
html, body {
  min-height: 100vh;
  margin: 0;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>