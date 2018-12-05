import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import module1 from './modules/module 1'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    module1
  },
  getters
})

export default store
