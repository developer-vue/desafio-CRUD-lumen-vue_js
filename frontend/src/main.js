import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';
import '@/assets/css/global.css';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.state.Auth.signed) {
//       next({
//         path: '/singin',
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
