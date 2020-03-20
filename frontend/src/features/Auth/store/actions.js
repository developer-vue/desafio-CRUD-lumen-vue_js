import api from '@/services/api';
import { toastSuccess, toastError, toastInfo } from '@/util/toast';

const actionInit = async ({ commit }) => {
  commit('SET_INIT');
};

const actionSingIn = async ({ commit }, { email, password, router }) => {
  try {
    commit('SET_LOADING', true);
    const res = await api.post('/login', {
      email,
      password
    });

    const { token, user } = res.data;
    commit('SET_SINGIN', { token, user });

    router.push('/apartment');

    toastInfo(`Seja bem vindo ${user.name}`);
  } catch (error) {
    toastError('Erro ao realizar login');
  } finally {
    commit('SET_LOADING', false);
  }
};

const actionSingUp = async (
  { commit },
  { name, email, password, password_confirmation }
) => {
  try {
    commit('SET_LOADING', true);
    await api.post('/register', {
      name,
      email,
      password,
      password_confirmation
    });

    toastSuccess('Cadastro realizado com sucesso');
  } catch (error) {
    toastError('Erro ao realizar o cadastro');
  } finally {
    commit('SET_LOADING', false);
  }
};

const actionLogout = async ({ commit }, { router }) => {
  commit('SET_LOGOUT');
  router.push('/singin');
};

export default {
  actionInit,
  actionSingIn,
  actionSingUp,
  actionLogout
};
