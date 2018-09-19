// 浏览器兼容
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'

// vuex
// import Vuex from 'vuex'
// import store from './vuex/store'
// Vue.use(Vuex)

// http
import axios from 'axios'

import App from './App'

// 引入 公共脚本
import '@/utils/until.js'

// 关闭提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {
    App
  },
  template: '<App/>'
})
