export const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn === true;
  }
};

// TODO refactor and make more general as needed.
// e.g. to pass in global state, getters etc.
const getStoreAccessors = getter => {
  return store => getter(store.state.login);
};

export const readIsLoggedIn = getStoreAccessors(getters.isLoggedIn);
