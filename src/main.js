// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* { App }为es6写法，等同于{App: App} */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
