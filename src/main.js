import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueCarousel from 'vue-carousel';
import VueRouter from 'vue-router'

import AppSelise from './views/AppSelise.vue'

Vue.use(VueRouter);


var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(VueCarousel);
Vue.config.productionTip = false


const router = new VueRouter({
	 routes: [
	{
		path: '/',
		component: AppSelise
	},

	// {
	// 	path: '/login',
	// 	component: AppLogin
	// },

	// {
	// 	path: '/signUp',
	// 	component: AppSignUp
	// }
	],
	mode: 'history'
});


new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
