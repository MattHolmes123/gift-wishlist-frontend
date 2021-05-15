import types from "@/store/mutation-types";
import WishlistApi from "@/store/modules/wishlist/api";
import { readToken } from "@/store/modules/login/getters";
import { readUserId } from "@/store/modules/user/getters";

const API = new WishlistApi();

// context attributes for reference:
// "dispatch", "commit", "getters", "state", "rootGetters", "rootState"

export const actions = {
  async getAllWishListItems(context) {
    const token = readToken(context.rootState);
    const response = await API.getAllWishlistItems(token);

    if (!response.ok) {
      console.error("Failed to load all wishlist items");
      return;
    }

    const wishlistItems = await response.json();
    await context.commit(types.SET_WISHLIST_ITEMS, { wishlistItems });
  },

  async getMyWishlist(context) {
    const token = readToken(context.rootState);
    const response = await API.getMyWishlist(token);

    if (!response.ok) {
      console.error("Failed to load user wishlist items");
      return;
    }

    const userWishlist = await response.json();
    await context.commit(types.SET_USER_WISHLIST_ITEMS, { userWishlist });
  },

  async addWishlistItem(context, { name, url }) {
    const token = readToken(context.rootState);
    const user_id = readUserId(context.rootState);
    const response = await API.addWishlistItem(token, name, url, user_id);

    if (!response.ok) {
      console.error("Failed to add a wishlist item");
      return;
    }

    const savedItem = await response.json();

    context.commit(types.ADD_WISHLIST_ITEM, {
      id: savedItem.id,
      name: savedItem.name,
      url: savedItem.url
    });
  }
};
