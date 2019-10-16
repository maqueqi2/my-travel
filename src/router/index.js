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
      path: '/hello',
      name: 'HelloWorld',
      // @代表src目录
      component: () => import('@/components/HelloWorld.vue'),
      meta: {
        title: '测试页'
      }
    }, {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/home.vue'),
      meta: {
        title: '首页'
      }
    }, {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/home.vue'),
      meta: {
        title: '首页'
      }
    }, {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/city.vue'),
      meta: {
        title: '城市'
      }
    }, {
      // /:id表示路径后面携带一个键名为id的参数
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/detail.vue'),
      meta: {
        title: '城市'
      }
    }
  ],
  // TODO:页面切换时，始终回到最顶部(不受其它页面滚动的影响)
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
