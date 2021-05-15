import types from "@/store/mutation-types";
import PlaygroundApi from "@/store/modules/playground/api";

const API = new PlaygroundApi(window.location.hostname, 8081);

export const actions = {
  async getPlaygroundState(context) {
    const { state, commit, rootState } = context;

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
};
