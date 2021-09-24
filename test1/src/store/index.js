import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    enterState: false, // 是否从首页进入过
    clientWidth: 0,
    clientHeight: 0,
    year: '2001', // 选择的年份
    isLandscape: false // 是否横屏
  },
  getters: {},
  mutations: {
    setEnterState (state, enterState) {
      state.enterState = enterState
    },
    setClientHeight (state, height) {
      state.clientHeight = height
    },
    setClientWidth (state, width) {
      state.clientWidth = width
    },
    setYear (state, year) {
      state.year = year
    },
    setLandscape (state, value) {
      state.isLandscape = value
    }
  },
  actions: {
    dispatchEnterState ({ commit }, enterState) {
      commit('setEnterState', enterState)
    }
  },
  // vuex-along 刷新页面时不需要重新设置配置，防止项目丢失
  plugins: [VuexAlong()]
})

export default store
