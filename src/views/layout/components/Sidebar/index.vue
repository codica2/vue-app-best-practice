<template lang="pug">
  section.sideBar
    sidebar-item(v-if="!route.hidden && route.children" v-for="route in routes" :key="route.name" :item="route" :base-path="route.path")
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'SideBar',
  components: { SidebarItem },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
  .sideBar {
    position: absolute;
    left: 0;
    width: 150px;
    padding: 10px;
    background: #fff;
    height: 100%;
    top: 0;
    border-right: 1px solid #000;
  }
</style>

