// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex  from 'vuex'
import VueResource from 'vue-resource'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

import store from './vuex/store'


Vue.use(VueResource)
Vue.use(iView);

Vue.http.options.emulateJSON = true


console.log(store)





Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render:h=>h(App),
  components: { App }
})
