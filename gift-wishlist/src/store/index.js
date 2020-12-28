import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import types from "@/store/mutation-types";
import PlaygroundApi from "@/store/playground-api";

const API = {
  playground: new PlaygroundApi(window.location.hostname, 8081)
};

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
    ],
    userGroup: [
      {
        id: 2,
        name: "Sophie",
        userWishList: [
          {
            id: 3,
            name: "Golf bag",
            url: "https://www.somegolfwebsite.com"
          },
          {
            id: 4,
            name: "Item 4",
            url: "https://www.someurl.com"
          }
        ]
      },
      {
        id: 3,
        name: "Tim",
        userWishList: [
          {
            id: 3,
            name: "Resident evil 3",
            url: "https://www.amazon.com/resident-evil-3-xbox"
          },
          {
            id: 4,
            name: "Item 5",
            url: "https://www.someotherurl.com"
          }
        ]
      }
    ]
  },

  mutations: {
    [types.SET_PLAYGROUND_STATE](state, payload) {
      state.count = payload.initialCount;
      state.playgroundListData = payload.playgroundListData;
    },
    [types.INCREMENT_COUNT](state) {
      state.count += 1;
    },
    [types.INCREMENT_COUNT_BY](state, { amount }) {
      state.count += parseInt(amount);
    },
    [types.ADD_WISHLIST_ITEM](state, { id, name, url }) {
      state.userWishlist.push({ id, name, url });
    }
  },

  actions: {
    async getPlaygroundState(context) {
      const appData = await API.playground.fetchPlaygroundState();

      const listData = appData.playground_list_data.map(
        ({ msg, foo, bar, baz }) => ({ msg, foo, bar, baz: () => baz })
      );

      context.commit(types.SET_PLAYGROUND_STATE, {
        initialCount: appData.count,
        playgroundListData: listData
      });
    },

    async addWishlistItem(context, { name, url }) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      // fake backend
      await setTimeout(() => {
        context.commit(types.ADD_WISHLIST_ITEM, {
          id: getRandomInt(1000), // fake backend id
          name,
          url
        });
      }, 300);
    }
  },

  modules: {}
});
