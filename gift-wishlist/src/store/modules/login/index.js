import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const defaultLoginState = () => ({ isLoggedIn: false, token: "" });

export const LoginModule = {
  namespaced: true,
  state: defaultLoginState,
  mutations,
  actions,
  getters
};
