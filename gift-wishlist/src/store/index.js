import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {
  INCREMENT_COUNT,
  INCREMENT_COUNT_BY,
  SET_APP_DATA
} from "@/store/mutation-types";

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    count: 1,
    playgroundListData: []
  },

  mutations: {
    [SET_APP_DATA](state, payload) {
      state.count = payload.initialCount;
      state.playgroundListData = payload.playgroundListData;
    },
    [INCREMENT_COUNT](state) {
      state.count += 1;
    },
    [INCREMENT_COUNT_BY](state, { amount }) {
      state.count += parseInt(amount);
    }
  },

  actions: {
    getAppState(context) {
      setTimeout(() => {
        context.commit(SET_APP_DATA, {
          initialCount: 42,
          playgroundListData: [
            { msg: "First message", foo: 1, bar: 2, baz: () => 3 },
            { msg: "Second message", foo: 11, bar: 22, baz: () => 33 }
          ]
        });
      }, 500);
    }
  },

  modules: {}
});
