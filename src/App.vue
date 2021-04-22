<template>
  <Main/>
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
:root {
  --textarea-wrapper-border: rgba(0, 0, 0, 0.6);
}
* {
  box-sizing: border-box;
}
</style>