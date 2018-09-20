var router = [
  {
    path: '/adminHome',
    name: 'adminHome',
    meta: {
      title: '后台首页'
    },
    component: resolve => require(['@/views/admin/home'], resolve)
  }
]
export default router
