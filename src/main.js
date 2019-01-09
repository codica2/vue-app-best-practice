import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/icons'
import '@/assets/styles/index.scss'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
