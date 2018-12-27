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

Vue application created with [Vue-cli](https://cli.vuejs.org/), [Vuex](https://vuex.vuejs.org/) for state management and [Vue-router](https://router.vuejs.org/) for routing.

## Project installation
##### Clone project

```
git clone [link]
```
#### Install dependencies
```
yarn
```
#### Start server

```
yarn serve
```
#### For production build
```
yarn build
```
#### If you want to customize the project - run `vue ui` and select the current project.
For this command, you need `vue-cli 3`. In case you don’t have this package installed, run the following command or find out the step-by-step tutorial using [official documentation](https://cli.vuejs.org/guide/installation.html). 

Remove vue-cli 2
```
yarn global remove vue-cli
```
Install `vue-cli 3` with a global flag
```
yarn global add @vue/cli
```
Check version
```
vue --version
```

## File structure

```
├public/            => Any static assets are placed here.
├src/
| ├─api/            => API functions
| ├─assets/         => Folder for relative path files’ import
| ├─components/     => Global components
| ├─directives/     => Custom directives
| ├─icons/          => SVG icons
| ├─mixins/         => Global mixins
| ├─router/         => Vue-router
| ├─store/          => Vuex
| ├─styles/         => Global styles
| ├─utils/          => Global constants and helper functions
| ├─views/          => Layouts for view
| ├─App.vue         => Main component
| └─main.js         => Main JS file
└static/            => Folder for static path files import
```

## Vuex structure

Vuex store is divided into modules. Each module has a main file `index.js` where Vuex patterns are gathered in `actions`, `mutations` and `getters`.


```
store/
├─modules/
|  └─bar/
|     ├─actions.js
|     ├─mutations.js
|     ├─getters.js
|     └─index.js
├──app.js
├─getters.js
├─mutations-types.js
└─index.js
```

Modules are installed in the `index.js` file, which is in the `Store` root folder.
The `getters.js` file is global to get application states.
File with name `mutations-types.js` has names of mutations constants.
```js
/* ... */
import app from './modules/app'
import bar from './modules/bar'
import getters from './getters'
/* ... */

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    bar
  },
  getters
})

export default store

```

### About Actions
To handle asynchronous actions we usually use [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype)
```js
import API from '@/api/index'

export const actions = {
  AsyncAction: ({ dispatch, commit }, payload) => {
    API.fetch(payload.method, payload.path, payload.data)
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
A directive is a special token in the markup that tells the library to take some `actions` to a DOM element.
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

### Component SvgIcon
Component `icons` are resolved as global for using in different components.
Afterwards, all the SVG icons become Vue components.

```vue
// SvgIcon.vue
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
```

```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('svg-icon', SvgIcon)

// main.js

import './icons'
```

### About request
For all the requests we are using `axios`. Create an `axios instance` for using base request template.
```js
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
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
    // Message({
    //  message: error.message,
    //  type: 'error',
    //  duration: 5000
    // })
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
