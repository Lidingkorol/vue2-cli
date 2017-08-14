// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
//import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLocalStorage from 'vue-localstorage'
import store from './vuex/store'



Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(iView);
Vue.use(VueLocalStorage)

Vue.http.options.emulateJSON = true


console.log(store)



Vue.config.productionTip = false




router.beforeEach((to, from, next) => {
		console.log(2)
  	store.dispatch("setLoading",true);
  	next();
  	
})

router.afterEach((to, from, next) => {
		console.log(3)
})



/* eslint-disable no-new */
new Vue({
	  el: '#app',
	  store,
	  router,
	  template: '<App/>',
	  render:h=>h(App),
	  components: { App }
})
