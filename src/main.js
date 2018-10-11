// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 浏览器兼容
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import axios from 'axios'
// 引入 公共脚本
import '@/utils/until.js'

import App from './App'

// ui

// vuex

Vue.use(Vuex)

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
