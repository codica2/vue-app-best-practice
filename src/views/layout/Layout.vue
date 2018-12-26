<template lang="pug">
  div.container
    sidebar
    app-main
</template>

<script>
import sidebar from './components/Sidebar/index'
import appMain from './AppMain'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  components: {
    sidebar,
    appMain
  },
  mixins: [ResizeMixin]
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
