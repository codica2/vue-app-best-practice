<template lang="pug">
  section.app-main
    router-view(:key="key")
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    margin-left: 165px;
  }
</style>
