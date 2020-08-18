import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    optgoods: [],
  },
  mutations: {
    setOptGoods(state, goods) {
      state.optgoods = goods
    },
  },
  actions: {
  },
  modules: {
  }
})
