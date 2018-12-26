<template>
  <div class="errPage-container">
    <button @click="back">Back</button>
      <h1>Oops!</h1>
      <h2>You don't have permission to go to this page</h2>
      <h6>If you are dissatisfied, please contact your leader.</h6>
  </div>
</template>

<script>

export default {
  name: 'Page401',
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
