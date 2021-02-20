export const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn === true;
  },
  token(state) {
    return state.token;
  }
};

const getStoreAccessors = getter => {
  return rootState => getter(rootState.login);
};

// TODO: Decide if I prefer exporting consts or actual functions
export const readIsLoggedIn = getStoreAccessors(getters.isLoggedIn);
export const readToken = getStoreAccessors(getters.token);
