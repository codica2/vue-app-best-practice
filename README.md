<h1 align="center">Vue base template</h1>
<p align="center">
<a href="http://www.opensource.org/licenses/mit-license.php" target="_blank">
	<img src="https://img.shields.io/badge/License-MIT-blue.svg">
</a>
<a href="https://vuejs.org/" target="_blank">
	<img src="https://img.shields.io/badge/Bandler-Webpack-%238DD6F9.svg">
</a>
<a href="https://vuejs.org/" target="_blank">
	<img src="https://img.shields.io/badge/View-Vue-brightgreen.svg">
</a>
<a href="https://vuejs.org/" target="_blank">
	<img src="https://img.shields.io/badge/State-Vuex-green.svg">
</a>
<a href="https://vuejs.org/" target="_blank">
	<img src="https://img.shields.io/badge/Routing-Vue_router-yellowgreen.svg">
</a>
<a href="https://vuejs.org/" target="_blank">
	<img src="https://img.shields.io/badge/Tool-Single_file_components-434cbc.svg">
</a>

</p>

## Description

Vue application created with [Vue](https://vuejs.org/) and [Vuex](https://vuex.vuejs.org/) for state managing.

## Setup project
#####Clone project

```
git clone [link]
```
####Install dependencies
```
yarn
```
####Start server

```
yarn serve
```
####For build in production
```
yarn build
```
####If you want customize run `vue ui` and select current project.
For these command you need `vue-cli 3`, if you do not have, run next or you can read in [official documentation](https://cli.vuejs.org/guide/installation.html). 

Remove vue-cli 2
```
yarn global remove vue-cli
```
Install `vue-cli 3` global
```
yarn global add @vue/cli
```
Check version
```
vue --version
```

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

Vuex store is divided into modules. Each module has a main file `index.js` in which Vuex patterns are collected in such as `actions`, `mutations` and `getters`.


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
File with name `mutations-types.js` has names of mutations constants.
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
import Api from '@/api/index'

export const actions = {
  AsyncAction: ({ dispatch, commit }, payload) => {
    Api.fetch(payload.method, payload.path, payload.data)
      .then(response => {
        commit('MUTATION_TYPE', response)
      })
      .catch(error => {
        dispatch('FailResponse', error)
      })
  },
  Action: ({ commit }, payload) => {
  	commit('MUTATION_TYPE', payload)
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
