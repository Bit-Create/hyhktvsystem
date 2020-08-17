import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    optgoods: [],
    goodsmodal: false
  },
  mutations: {
    setOptGoods(state, goods) {
      state.optgoods = goods
    },
    setGoodsModal(state) {
      state.goodsmodal = !state.goodsmodal
    }
  },
  actions: {
  },
  modules: {
  }
})
