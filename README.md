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

## Vuex

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

## License
 vue-base-template is Copyright © 2015-2018 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).
 
## About Codica
 
 [![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)
 
 We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
