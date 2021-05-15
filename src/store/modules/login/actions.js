import types from "@/store/mutation-types";
import LoginApi from "@/store/modules/login/api";

const API = new LoginApi();

// context attributes for reference:
// "dispatch", "commit", "getters", "state", "rootGetters", "rootState"

export const actions = {
  async loginUser(context, { username, password }) {
    const response = await API.login(username, password);

    // response.ok checks status_code is in range 200 - 299
    if (!response.ok) {
      context.commit(types.LOG_OUT_USER);
      return;
    }

    const { access_token: token } = await response.json();
    context.commit(types.LOG_IN_USER, { token });

    await context.dispatch("user/getOwnUserProfile", {}, { root: true });
  },

  async logoutUser(context) {
    // Here is where we would delete the token from storage (see utils.js)
    // removeLocalToken()
    context.commit(types.LOG_OUT_USER);
  },

  async testUserToken(context) {
    const token = context.state.token;
    const response = await API.testToken(token);
    if (!response.ok) {
      context.commit(types.LOG_OUT_USER);
    }

    const data = await response.json();
    console.log(data);
  }
};

// TODO Come back to this when better at vuex.
// The problem being the "best" way to dispatch actions that are namespaced from another module
// const getStoreAccessors = action => {
//   // to make it generic later.
//   const state_key = "login";
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
// export const dispatchTestUserToken = getStoreAccessors(actions.testUserToken);
