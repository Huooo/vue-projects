// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false;
Vue.prototype.$ajax = Axios;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
