import api from '@/services/api';
import { toastSuccess, toastError } from '@/util/toast';

const actionGetApartaments = async ({ commit }) => {
  try {
    commit('SET_LOADING', true);

    const res = await api.get('/apartments');
    const apartments = res.data;

    commit('SET_APARTMENTS', { apartments });
  } finally {
    commit('SET_LOADING', false);
  }
};

const actionSave = async ({ commit }, payload) => {
  try {
    commit('SET_LOADING_SAVE', true);

    const res = await api.post('/apartments', payload);
    commit('SET_SAVE', res.data);

    toastSuccess('Apartamento salvo');
  } catch (error) {
    toastError('Erro ao salvar');
  } finally {
    commit('SET_LOADING_SAVE', false);
  }
};

const actionUpdate = async ({ commit }, payload) => {
  try {
    commit('SET_LOADING_SAVE', true);

    const res = await api.put(`/apartments/${payload.id}`, payload);

    commit('SET_UPDATE', res.data);

    toastSuccess('Apartamento atualizado');
  } catch (error) {
    toastError('Erro ao atualizar');
  } finally {
    commit('SET_LOADING_SAVE', false);
  }
};

const actionRemove = async ({ commit }, payload) => {
  try {
    // commit('SET_LOADING_SAVE', true);

    // console.log('excluir', payload);

    await api.delete(`/apartments/${payload.id}`);
    commit('SET_REMOVE', payload);

    toastSuccess('removido');
  } catch (error) {
    toastError('Erro ao remover');
  } finally {
    // commit('SET_LOADING_SAVE', false);
  }
};

const actionSearch = async ({ commit }, payload) => {
  try {
    // console.log(payload);
    commit('SET_LOADING_SEARCH', true);

    const res = await api.get('/apartments', {
      params: {
        q: payload.term,
        page: payload.page,
        perPage: 7
      }
    });
    const apartments = res.data.data;
    const pagination = {
      current_page: res.data.current_page,
      last_page: res.data.last_page,
      per_page: res.data.per_page,
      total: res.data.total
    };

    // console.log(apartments);

    commit('SET_SEARCH', { apartments, pagination });
  } catch (error) {
    toastError('Erro ao pesquisar');
  } finally {
    commit('SET_LOADING_SEARCH', false);
  }
};

export default {
  actionGetApartaments,
  actionSave,
  actionUpdate,
  actionRemove,
  actionSearch
};
