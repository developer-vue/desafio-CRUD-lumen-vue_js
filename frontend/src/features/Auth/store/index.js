import state from '@/features/Auth/store/state';
import actions from '@/features/Auth/store/actions';
import mutations from '@/features/Auth/store/mutations';
import getters from '@/features/Auth/store/getters';

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
