import * as types from '../mutation-types'
const app = {
  state: {},
  actions: {
    Action: ({ commit }) => {
      commit([types.MUTATION])
    }
  },
  getters: {
    getState: (state) => state
  },
  mutations: {
    [types.MUTATION] (state, payload) {
      state = payload
    }
  },
}

export default app
