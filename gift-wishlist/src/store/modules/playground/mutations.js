import types from "@/store/mutation-types";

export const mutations = {
  [types.SET_PLAYGROUND_STATE](state, payload) {
    state.count = payload.initialCount;
    state.playgroundListData = payload.playgroundListData;
  },
  [types.INCREMENT_COUNT](state) {
    state.count += 1;
  },
  [types.INCREMENT_COUNT_BY](state, { amount }) {
    state.count += parseInt(amount);
  }
};
