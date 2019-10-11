// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// reset(重置页面样式表)使移动端样式保持统一(PS:一些移动端的默认样式不是统一的)
import './assets/css/reset.css'
// 解决1像素边框的问题(在多倍屏中，1像素边框会被显示成多像素边框)
import './assets/css/border.css'
// 移动端或有些浏览器上click事件会有300ms的延时(会导致网页无法缩放)：在命令行输入：npm install fastclick --save
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

// 动态设置页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
/* router为es6写法，等同于router: router;{ App }等同于{App: App}；es6中键和值相同时可省略一部分写法 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
