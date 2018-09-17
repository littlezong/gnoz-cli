var router = [
  {
    path: '/',
    redirect: '/login',
    component: resolve => require(['@/views/index/container'], resolve)
  },
  {
    path: '/login',
    title: '登录',
    name: 'login',
    component: resolve => require(['@/views/index/login/index'], resolve)
  },
  {
    path: '*',
    component: resolve => require(['@/views/error/404'], resolve)
  }
]
export default router
