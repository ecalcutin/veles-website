import Vue from 'vue';
import App from './App.vue';

import { router, store, vuetify } from './plugins';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
