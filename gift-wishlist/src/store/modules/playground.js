import PlaygroundApi from "@/store/modules/playground-api";
import types from "@/store/mutation-types";

const API = new PlaygroundApi(window.location.hostname, 8081);

const PlaygroundModule = {
  namespaced: true,

  state: () => ({
    count: 1,
    playgroundListData: []
  }),

  mutations: {
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
  },

  actions: {
    async getPlaygroundState({ state, commit, rootState }) {
      console.log(state); // local state
      console.log(rootState); // root state

      const appData = await API.fetchPlaygroundState();
      const listData = appData.playground_list_data.map(
        ({ msg, foo, bar, baz }) => ({ msg, foo, bar, baz: () => baz })
      );

      commit(types.SET_PLAYGROUND_STATE, {
        initialCount: appData.count,
        playgroundListData: listData
      });
    }
  },

  // Module getter arguments: state, getters, rootState, rootGetters
  getters: {}
};

export { PlaygroundModule };
