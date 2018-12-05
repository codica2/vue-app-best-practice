<template lang="pug">
  section.app-main
    transition(name="fade-transform" mode="out-in")
      keep-alive(:include="cachedViews")
        router-view(:key="key")
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
</style>

