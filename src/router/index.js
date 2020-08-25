import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
// 
Vue.use(Router)


export const asyncRouterMap = [
  {
    path: 'home',
    component: () => import('@/views/home/index'),
    // 当菜单文件中没有该页面配置时，在标签栏显示的就是这里配置的标题
    meta: { title: '职业技能培训' }
  },
]

export const constantRouterMap = [
  { path: '/home', component: () => import('@/views/home/index') },
  { path: '*', component: () => import('@/views/404') },
  {
    path: '/',
    component: Layout,
    redirect: 'home', // 首页
    children: [
      ...asyncRouterMap
    ]
  }
]
const router = new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

