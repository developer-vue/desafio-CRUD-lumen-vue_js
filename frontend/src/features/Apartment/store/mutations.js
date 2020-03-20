const SET_APARTMENTS = (state, payload) => {
  state.apartments = payload.apartments;
};

const SET_SAVE = (state, payload) => {
  state.apartments = [payload, ...state.apartments];
};

const SET_UPDATE = (state, payload) => {
  const newList = state.apartments.map(current => {
    if (current.id === payload.id) {
      return payload;
    }
    return current;
  });

  state.apartments = newList;
};

const SET_REMOVE = (state, payload) => {
  const newList = state.apartments.filter(current => current.id !== payload.id);

  state.apartments = newList;
};

const SET_SEARCH = (state, payload) => {
  state.apartments = payload.apartments;
  state.pagination = payload.pagination;
};

const SET_LOADING = (state, payload) => {
  state.loading = payload;
};

const SET_LOADING_SAVE = (state, payload) => {
  state.loading_save = payload;
};

const SET_LOADING_SEARCH = (state, payload) => {
  state.loading_search = payload;
};

export default {
  SET_APARTMENTS,
  SET_SAVE,
  SET_UPDATE,
  SET_REMOVE,
  SET_SEARCH,
  SET_LOADING,
  SET_LOADING_SAVE,
  SET_LOADING_SEARCH
};
