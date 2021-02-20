import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const defaultState = () => ({
  id: 0,
  full_name: "",
  email: "",
  is_active: false,
  is_superuser: false
});

export const UserModule = {
  namespaced: true,
  state: defaultState,
  mutations,
  actions,
  getters
};
