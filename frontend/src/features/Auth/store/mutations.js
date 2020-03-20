import { setItem, removeItem, getItem } from '@/util/localStorage';

const SET_INIT = state => {
  if (
    getItem('token') !== null &&
    getItem('token') !== '' &&
    getItem('user') !== null &&
    getItem('user') !== ''
  ) {
    state.signed = true;
    state.token = getItem('token');
    state.user = JSON.parse(getItem('user'));

    // console.log('token', getItem('token'));
    // console.log('user', getItem('user'));
  }
};

const SET_SINGIN = (state, payload) => {
  setItem('token', payload.token);
  setItem('user', JSON.stringify(payload.user));

  state.signed = true;
  state.token = payload.token;
  state.user = payload.user;
};

const SET_LOGOUT = state => {
  removeItem('token');
  removeItem('user');

  state.signed = false;
  state.token = null;
  state.user = {};
};

const SET_LOADING = (state, payload) => {
  state.loading = payload;
};

export default {
  SET_INIT,
  SET_SINGIN,
  SET_LOADING,
  SET_LOGOUT
};
