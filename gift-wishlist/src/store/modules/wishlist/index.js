import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const defaultWishlistState = () => ({
  users: {},
  wishlistItems: []
});

export const WishlistModule = {
  namespaced: true,
  state: defaultWishlistState,
  mutations,
  actions,
  getters
};
