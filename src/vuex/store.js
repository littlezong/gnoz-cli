import Vuex from 'vuex'
import Vue from 'vue'
let Base64 = require('js-base64').Base64
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tokenTime: 0,
    slideropentool: false, // 数广演示
    menudata: 'menu2',
    tokens: ' ',
    usermesg: {
      username: '',
      userId: '', // 1管理员 2普通用户
      roles: '',
      timer: ''
    },
    globalLoading: false,
    typeName: ''
  },
  mutations: {
    setGlobalLoading(state, isLoading) {
      state.globalLoading = isLoading
    },
    sliderdeal(state) {
      state.slideropentool = !state.slideropentool
    },
    changeApiTab(state, val) {
      //   state.createApiTabStatus = val
      localStorage.setItem('createApiTabStatus', val)
    },
    // 清除用户token、权限
    clearUser(state) {
      localStorage.clear()
    },
    // 通讯录设置人员，部门，标签跳转
    setTypeName(state, type) {
      state.type = type
    },
    // 同步token
    Tokenjudge(state, val) {
      // 解析header
      state.tokenData = JSON.parse(Base64.decode(val.split('.')[0]))
      // 解析用户信息
      state.tokens = JSON.parse(Base64.decode(val.split('.')[1]))
      let exp = state.tokens.exp
      let sub = JSON.parse(state.tokens.sub) // 获取用户信息
      let username = sub.userName
      let roles = 1
      let USER_ID = state.tokenData.USER_ID
      if (username === 'admin') {
        roles = 1 // 测试用
      } else {
        roles = 2
      }
      // id
      localStorage.setItem('USER_ID', USER_ID)
      // 角色
      localStorage.setItem('roles', roles)
      // 用户名
      localStorage.setItem('username', username)
      // 有效时间
      localStorage.setItem('userexp', exp)
    },
    // 刷新token时间
    newTokenDate(state, date) {
      state.tokenTime = date
    }
  },
  getters: {
    getGloablLoading: state => {
      return state.globalLoading
    }
  },
  modules: {}
})
export default store
