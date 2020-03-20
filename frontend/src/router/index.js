import Vue from 'vue';
import Router from 'vue-router';

import { getItem } from '@/util/localStorage';

import routesAuth from '@/features/Auth/routes';
import routesApartment from '@/features/Apartment/routes';
import routesDashboard from '@/features/Dashboard/routes';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  ...routesAuth,
  ...routesDashboard,
  ...routesApartment,
  { path: '*', redirect: '/' }
];

const router = new Router({ mode: 'history', routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    if (getItem('token') == null || getItem('user') == null) {
      next({
        path: '/singin',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (getItem('token') == null) {
//       next({
//         path: '/singin',
//         params: { nextUrl: to.fullPath }
//       });
//     } else {
//       let user = JSON.parse(getItem('user'));
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin == 1) {
//           next();
//         } else {
//           next({ name: 'userboard' });
//         }
//       } else {
//         next();
//       }
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (localStorage.getItem('jwt') == null) {
//       next();
//     } else {
//       next({ name: 'userboard' });
//     }
//   } else {
//     next();
//   }
// });

export default router;
