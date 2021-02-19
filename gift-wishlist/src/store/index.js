import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { PlaygroundModule } from "@/store/modules/playground/index.js";
import { LoginModule } from "@/store/modules/login/index.js";
import types from "@/store/mutation-types";

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    playground: PlaygroundModule,
    login: LoginModule
  },

  state: {
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
    [types.ADD_WISHLIST_ITEM](state, { id, name, url }) {
      state.userWishlist.push({ id, name, url });
    }
  },

  actions: {
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
  }
});
