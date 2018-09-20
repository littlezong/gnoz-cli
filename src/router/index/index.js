var router = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: resolve => require(['@/views/index/home'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: resolve => require(['@/views/index/login'], resolve)
  },
  {
    path: '*',
    component: resolve => require(['@/views/error/404'], resolve)
  }
]
export default router
