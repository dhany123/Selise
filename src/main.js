import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueCarousel from 'vue-carousel';


var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
