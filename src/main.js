// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.use(ElementUI)

var store = new Vuex.Store({ // store 对象
  state: {
    show: false
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
