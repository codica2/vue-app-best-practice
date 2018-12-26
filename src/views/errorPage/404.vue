<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div>
        <div>OOPS!</div>
        <div>{{ message }}</div>
        <div>Please check that the URL you entered is correct. Please click the button below to return to the homepage or send an error report.</div>
        <button @click="back">Back to home</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return 'You can\'t enter this page......'
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
