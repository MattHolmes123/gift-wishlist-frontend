export const getters = {
  userId(state) {
    return state.id;
  }
};

const getStoreAccessors = getter => {
  return rootState => getter(rootState.user);
};

// TODO: Decide if I prefer exporting consts or actual functions

// Call `readUserId` with the store and it will give you the value.
export const readUserId = getStoreAccessors(getters.userId);
