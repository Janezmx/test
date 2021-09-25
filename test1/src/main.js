import Vue from 'vue'

// 请求地址前缀
Vue.prototype.$urlPrefix = '/api'
Vue.config.productionTip = false
// axios
import HttpInstaller from '@/plugin/http.js'
HttpInstaller.install(Vue)

import '@/assets/less/index.less'
import App from './App.vue'
import router from './router/'
import store from './store'
// global mixins
import GlobalMixins from '@/mixins/global'
Vue.mixin(GlobalMixins)
import wx from 'weixin-js-sdk'
import { isIOS } from './constant'
import { isPC } from './constant'
Vue.prototype.$wx = wx
Vue.prototype.$isIOS = isIOS
Vue.prototype.$isPC = isPC
// import VConsole from 'vconsole' // ios必须安装才能使用；安卓可通过 微信访问1.http://debugtbs.qq.com 2. debugmm.qq.com/?forcex5=true
// new VConsole()


import ComponentsInstall from '@/components/install'
ComponentsInstall(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
