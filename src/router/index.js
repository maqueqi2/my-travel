import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {  //重定向
    //   path: '/',
    //   redirect: '/homePage'
    // },
    {
      path: '/',
      name: 'HelloWorld',
      // @代表src目录
      component: () => import('@/components/HelloWorld.vue'),
      meta: {
        title: '测试页'
      }
    }, {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
})
