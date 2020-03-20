import Dashboard from '@/features/Dashboard/pages';

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];

export default routes;
