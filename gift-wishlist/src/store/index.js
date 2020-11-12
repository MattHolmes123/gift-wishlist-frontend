import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {
  INCREMENT_COUNT,
  INCREMENT_COUNT_BY,
  SET_APP_DATA,
  ADD_WISHLIST_ITEM
} from "@/store/mutation-types";

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    count: 1,
    playgroundListData: [],
    userWishlist: [
      {
        id: 1,
        name: "PS5",
        url:
          "https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/ref=sr_1_2?dchild=1&keywords=ps5&qid=1605199544&sr=8-2"
      },
      {
        id: 2,
        name: "New Graphics Card",
        url:
          "https://www.amazon.co.uk/3080-GeForce-RTXTM-VENTUS-10G/dp/B08HM4M621/ref=sr_1_1?dchild=1&keywords=RTx+3080&qid=1605199667&sr=8-1"
      }
    ]
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
    },
    [ADD_WISHLIST_ITEM](state, { id, name, url }) {
      state.userWishlist.push({ id, name, url });
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
    },

    async addWishlistItem(context, { name, url }) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      // fake backend
      await setTimeout(() => {
        context.commit(ADD_WISHLIST_ITEM, {
          id: getRandomInt(1000), // fake backend id
          name,
          url
        });
      }, 300);
    }
  },

  modules: {}
});
