import types from "@/store/mutation-types";
import UserApi from "@/store/modules/user/api";
import { readToken } from "@/store/modules/login/getters";

const API = new UserApi();

// context attributes for reference:
// "dispatch", "commit", "getters", "state", "rootGetters", "rootState"

export const actions = {
  async getOwnUserProfile(context) {
    const token = readToken(context.rootState);
    const response = await API.getUserProfile(token);

    if (!response.ok) {
      console.log("Failed to load user profile");
      context.commit(types.CLEAR_USER_PROFILE);
      await context.dispatch("login/testUserToken", {}, { root: true });

      return;
    }

    const userProfile = await response.json();
    context.commit(types.SET_USER_PROFILE, userProfile);
  }
};

// TODO: before using these get better at Vuex.
// The problem being the "best" way to dispatch actions that are namespaced from another module
// const getStoreAccessors = action => {
//   // to make it generic later.
//   const state_key = "user";
//
//   return context => {
//     let { ...ctx } = context;
//     // set state to be the user state.
//     ctx.state = context.rootState[state_key];
//
//     action(ctx);
//   };
// };
//
// // TODO: Decide if I prefer exporting consts or actual functions
// export const dispatchGetOwnUserProfile = getStoreAccessors(
//   actions.getOwnUserProfile
// );
