import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '@/features/Auth/store';
import Dashboard from '@/features/Dashboard/store';
import Apartment from '@/features/Apartment/store';

Vue.use(Vuex);

const modules = {
  Auth,
  Dashboard,
  Apartment
};

const store = new Vuex.Store({
  modules
});

export default store;
