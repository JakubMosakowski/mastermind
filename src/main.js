import Vue from 'vue';
import VueVisible from 'vue-visible';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import '@/assets/global.scss';

Vue.use(BootstrapVue);
Vue.use(VueVisible);
Vue.config.productionTip = false;

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
