import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

// TODO: Make state names consistent / only have one key for both
export const defaultWishlistState = () => ({
  users: {},
  // This is currently used when loading all wishlist items
  wishlistItems: [],
  // This is currently used when loading a users wishlist
  userWishlist: []
});

export const WishlistModule = {
  namespaced: true,
  state: defaultWishlistState,
  mutations,
  actions,
  getters
};
