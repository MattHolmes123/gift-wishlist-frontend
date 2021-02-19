import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const LoginModule = {
  namespaced: true,
  state: () => ({
    isLoggedIn: "",
    token: ""
  }),
  mutations,
  actions,
  getters
};
