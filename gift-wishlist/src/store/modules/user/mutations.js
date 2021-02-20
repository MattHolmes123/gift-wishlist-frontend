import types from "@/store/mutation-types";
import { defaultState } from "@/store/modules/user/index";

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
    const defaultValues = defaultState();

    state.id = defaultValues.id;
    state.full_name = defaultValues.full_name;
    state.email = defaultValues.email;
    state.is_active = defaultValues.is_active;
    state.is_superuser = defaultValues.is_superuser;
  }
};
