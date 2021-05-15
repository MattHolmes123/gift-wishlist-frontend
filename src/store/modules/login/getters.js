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

// Call `readIsLoggedIn` with the store and it will give you the value.
export const readIsLoggedIn = getStoreAccessors(getters.isLoggedIn);

// Call `readToken` with the store and it will give you the value.
export const readToken = getStoreAccessors(getters.token);
