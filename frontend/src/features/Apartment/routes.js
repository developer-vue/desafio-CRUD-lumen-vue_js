import Apartment from '@/features/Apartment/pages';

const routes = [
  {
    name: 'Apartment',
    path: '/apartment',
    component: Apartment,
    meta: { requiresAuth: true }
  }
];

export default routes;
