<template lang="pug">
  div.menu-wrapper
    template(v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)")
      router-link(:to="{ name: onlyOneChild.name }")
        svg-icon(v-if="onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon" :class-name="onlyOneChild.meta.icon")
        span(v-if="onlyOneChild.meta") {{onlyOneChild.meta.title}}
    div(v-else)
      template(v-for="child in item.children" v-if="!child.hidden")
        .childrens(v-if="child.children && child.children.length > 0",)
          span(v-if="child.meta") {{child.meta.title}}
          sidebar-item(
            :item="child",
            :key="child.path",
            :base-path="child.path",
            :class="{ 'nest-menu': child.meta }")
        router-link(v-else :key="child.name" :to="{ name: child.name }")
          svg-icon(v-if="child.meta.icon" :icon-class="child.meta.icon" :class-name="child.meta.icon")
          span(v-if="child.meta") {{child.meta.title}}
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
  .nest-menu {
    padding-left: 15px;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
</style>
