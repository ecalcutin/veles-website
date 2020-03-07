import Vue from 'vue';
import Vuex from 'vuex';

import UIModule from '@/store/ui';
import ProductsModule from '@/store/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UI: UIModule,
    products: ProductsModule
  }
});
