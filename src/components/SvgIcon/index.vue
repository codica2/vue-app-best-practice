<template lang="pug">
  component(:is="iconClass")
</template>

<script>
import Vue from 'vue'
const req = require.context('@/icons/svg/', false, /\.svg$/);

function importAll () {
  req.keys().map(key => {
    const name = key.match(/\w+/)[0];
    return Vue.component(name, () => import(`@/icons/svg/${name}.svg`))
  })
}

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
  components: {
    ...importAll()
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
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
