import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const PlaygroundModule = {
  namespaced: true,
  state: () => ({
    count: 1,
    playgroundListData: []
  }),
  mutations,
  actions,
  getters
};
