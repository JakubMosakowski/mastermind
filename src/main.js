import Vue from 'vue';
import VueVisible from 'vue-visible';
import App from './App.vue';
import router from './router';

Vue.use(VueVisible);
Vue.config.productionTip = false;

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
