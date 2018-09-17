import Vue from 'vue'
import { mapMutations } from 'vuex'
import store from '@/vuex/store'
import Router from 'vue-router'
import index from './index/index' // 引用首页模块路由数组对象
import admin from './admin' // 引用后台模块路由数组对象

Vue.use(Router)

var childrenRouter = [] // 定义子路由模块集合
childrenRouter = childrenRouter.concat(index) // 首页子组件拷贝到路由模块集合中
childrenRouter = childrenRouter.concat(admin) // // 后台子组件拷贝到路由模块集合中
var router = new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: childrenRouter
})
router.beforeEach((to, from, next) => {
  store.commit('setGlobalLoading', true)
  next()
})
router.afterEach(() => {
  store.commit('setGlobalLoading', false)
})

export default router
