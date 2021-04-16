<template>
  <Main msg="Hello Vue 3 + Vite"/>
</template>

<script>
import Main from "./components/Main.vue";
export default {
  components: {Main}
}
</script>

<style>
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