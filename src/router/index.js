import Vue from 'vue'
import store from '@/vuex/store'
import Router from 'vue-router'
import index from './index/index' // 引用首页模块路由数组对象
import admin from './admin' // 引用后台模块路由数组对象

Vue.use(Router)
// 定义子路由模块集合
var childrenRouter = []
// 合并路由
childrenRouter = childrenRouter.concat(index)
childrenRouter = childrenRouter.concat(admin)

var router = new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: childrenRouter
})

export default router
