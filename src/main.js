// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 移动端或有些浏览器上click事件会有300ms的延时(会导致网页无法缩放)：在命令行输入：npm install fastclick --save
import fastClick from 'fastclick'
// TODO: styles是在webpack.base.conf.js新配置的，类似于@;修改webpack配置后项目需要重启，否则会报错
// reset(重置页面样式表)使移动端样式保持统一(PS:一些移动端的默认样式不是统一的)
import 'styles/reset.css'
// 解决1像素边框的问题(在多倍屏中，1像素边框会被显示成多像素边框)
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 将ES6代码转为ES5代码 安装代码npm install babel-polyfill --S
import 'babel-polyfill'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /*, { default global options } */)

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
  store,
  components: { App },
  template: '<App/>'
})
