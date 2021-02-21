import types from "@/store/mutation-types";
import { defaultUserState } from "@/store/modules/user/index";

export const mutations = {
  [types.SET_USER_PROFILE](
    state,
    { id, full_name, email, is_active, is_superuser }
  ) {
    state.id = id;
    state.full_name = full_name;
    state.email = email;
    state.is_active = is_active;
    state.is_superuser = is_superuser;
  },

  [types.CLEAR_USER_PROFILE](state) {
    const defaults = defaultUserState();
    for (const [key, value] of Object.entries(defaults)) {
      state[key] = value;
    }
  }
};
