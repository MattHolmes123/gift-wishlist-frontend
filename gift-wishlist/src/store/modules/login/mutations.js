import types from "@/store/mutation-types";

import { defaultLoginState } from "@/store/modules/login/index";

export const mutations = {
  [types.LOG_IN_USER](state, { token }) {
    state.isLoggedIn = true;
    state.token = token;
  },
  [types.LOG_OUT_USER](state) {
    const defaults = defaultLoginState();
    for (const [key, value] of Object.entries(defaults)) {
      state[key] = value;
    }
  }
};
