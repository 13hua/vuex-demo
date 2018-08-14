import Vue from 'vue';
import Vuex from 'vuex';

import dialog from './dialog';
import counter from './counter';

Vue.use(Vuex);

export default new Vuex.Store({ // store 对象
  modules: {
    dialog,
    counter
  }
});
