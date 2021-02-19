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
