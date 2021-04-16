<template>
  <h1>{{msg}}</h1>
  <button @click="state.count++">state.count+</button>
  <p>
    Count is: {{state.count}}
  </p>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  },
  data() {
    return {
      state: {
        count: 0
      }
    }
  }
}
</script>

<style scoped lang="sass">
a
  color: #42b983
</style>