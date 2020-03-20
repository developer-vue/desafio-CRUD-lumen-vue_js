import SingIn from '@/features/Auth/pages/SingIn';
import SingUp from '@/features/Auth/pages/SingUp';

const routes = [
  {
    name: 'SingIn',
    path: '/singin',
    component: SingIn,
    meta: { guest: true }
  },
  {
    name: 'SingUp',
    path: '/singup',
    component: SingUp,
    meta: { guest: true }
  }
];

export default routes;
