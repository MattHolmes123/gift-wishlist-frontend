import types from "@/store/mutation-types";
// import { defaultUserState } from "@/store/modules/user/index";

export const mutations = {
  [types.SET_WISHLIST_ITEMS](state, { wishlistItems }) {
    state.wishlistItems = wishlistItems;
  },

  [types.SET_USER_WISHLIST_ITEMS](state, { userWishlist }) {
    state.userWishlist = userWishlist;
  }
};
