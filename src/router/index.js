import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from 'components/HelloWorld'
import index from 'pages/index/index';
import parent from 'components/vuex-parent/vuex-parent';

import main from 'views/main/main';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/parent',
    name: 'parent',
    component: parent
  }
  ]
})
