<h1 align="center">Vue base template</h1>

## Description

Vue application created with [Vue-cli 3](https://cli.vuejs.org/) and [Vuex](https://vuex.vuejs.org/) for state managing.

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

## License

The MIT License (MIT)

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com/)

Copyright (c) 2018 Codica

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
