<template lang="pug">
  component(:is="iconClass" :class="svgClass")
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  created() {
    Vue.component(this.iconClass, () => import(`@/icons/svg/${this.iconClass}.svg`))
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -.15em;
  fill: currentColor;
}
</style>
