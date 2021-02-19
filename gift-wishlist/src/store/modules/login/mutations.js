import types from "@/store/mutation-types";

export const mutations = {
  [types.LOG_IN_USER](state, { token }) {
    state.isLoggedIn = true;
    state.token = token;
  },
  [types.LOG_OUT_USER](state) {
    state.isLoggedIn = false;
    state.token = "";
  }
};
