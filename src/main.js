// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 浏览器兼容
import 'babel-polyfill'
import Vue from 'vue'
// 引入 ElementUI
import '@/lib/element-ui'

import App from './App'
import router from './router'
// http
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
// import Do1Ui from 'do1-ui'
// import 'do1-ui/lib/theme-default/index.css'

import {
  DyButton,
  DyInput
} from 'do1-ui'

// 弹窗
// import DomPortal from 'vue-dom-portal'
// 引入 ElementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 引入echarts
// import echarts from 'echarts'

// 引入 公共脚本
import '@/utils/until.js'

// Vue.use(Do1Ui)
Vue.use(DyButton)
Vue.use(DyInput)
Vue.use(Vuex)
// 引入ElementUI样式
// Vue.use(ElementUI)
// Vue.prototype.$echarts = echarts

// 关闭提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    test: 'EntryData'
  },
  router,
  axios,
  store,
  components: {
    App
  },
  template: '<App/>'
})
