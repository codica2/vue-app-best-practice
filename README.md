<h1 align="center">Vue base template</h1>

## Description

Vue application created with [Vue](https://vuejs.org/) and [Vuex](https://vuex.vuejs.org/) for state managing.

## File structure

```
├build/             => Global rules for building project
├config/            => Global constants for building project
├src/
| ├─api/            => Api function
| ├─assets/         => Folder for files relative path imports
| ├─components/     => Global components
| ├─directives/     => Custom directives
| ├─icons/          => Svg icons
| ├─mixins/         => Global mixins
| ├─router/         => Vue-router
| ├─store/          => Vuex
| ├─styles/         => Global styles
| ├─utils/          => Global constants and helper functions
| ├─views/          => Layouts for view
| ├─App.vue         => Main component
| └─main.js         => Main JS file
├static/            => Folder for files static path imports
```

## Vuex structure

```
store/
├─modules/
|  ├─module 1/
|  |  ├─actions.js
|  |  ├─mutations.js
|  |  ├─getters.js
|  |  └─index.js
|  └─app.js
├─getters.js
├─mutations-types.js
└─index.js
```

Modules are installed in the `index.js` file, which is in the root of the folder `store`.
The `getters.js` file is global to get application states.
```js
/* ... */
import app from './modules/app'
import module1 from './modules/module 1'
import getters from './getters'
/* ... */

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    module1
  },
  getters
})

export default store

```

### About actions
To handle asynchronous actions we usually using [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype)
```js
export const actions = {
  AsyncAction: ({ dispatch, commit }) => {
    Api.fetch(query, params)
      .then(response => {
        commit('MUTATION_TYPE', response)
      })
      .catch(error => {
        dispatch('FailResponse', error)
      })
  }
}

```

### About directives
All custom `directives` are in different folders and are imported only if they are used in the `component`.
```js
import directive from './directive'

const install = (Vue) => {
  Vue.directive('directive', directive)
}

if (window.Vue) {
  window['directive'] = directive
  Vue.use(install)
}

directive.install = install
export default directive
```

### About icons
Component `icons` is registered like global for using in different components.
After this all svg icons be a vue components.
```vue
// SvgIcon.vue
<template lang="pug">
  svg(:class="svgClass" aria-hidden="true")
    use(:xlink:href="iconName")
</template>

<script>
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
```

```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// main.js

import './icons'
```

### About request
For all request we are using `axios`. Create an `axios instance` for using base request template.
```js
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  },
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

export default service

```
## License
 vue-base-template is Copyright © 2015-2018 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).
 
## About Codica
 
 [![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)
 
 We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
