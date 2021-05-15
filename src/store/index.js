import Vue from "vue";
import Vuex from "vuex";

import types from "@/store/mutation-types";

import { PlaygroundModule } from "@/store/modules/playground/index.js";
import { LoginModule } from "@/store/modules/login/index.js";
import { UserModule } from "@/store/modules/user/index.js";
import { WishlistModule } from "@/store/modules/wishlist/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    playground: PlaygroundModule,
    login: LoginModule,
    user: UserModule,
    wishlist: WishlistModule
  },

  state: () => ({
    // TODO: Remove this when implementing user groups
    userGroup: [
      {
        id: 2,
        name: "Sophie",
        userWishList: [
          {
            id: 3,
            name: "Golf bag",
            url: "https://www.somegolfwebsite.com",
            user_id: 2
          },
          {
            id: 4,
            name: "Item 4",
            url: "https://www.someurl.com",
            user_id: 2
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
            url: "https://www.amazon.com/resident-evil-3-xbox",
            user_id: 3
          },
          {
            id: 4,
            name: "Item 5",
            url: "https://www.someotherurl.com",
            user_id: 3
          }
        ]
      }
    ]
  }),

  // TODO: remove this when doing real api
  mutations: {
    [types.ADD_WISHLIST_ITEM](state, { id, name, url }) {
      state.userWishlist.push({ id, name, url });
    }
  },

  // TODO: remove this when doing real api
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
