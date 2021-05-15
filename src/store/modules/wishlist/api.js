import { apiUrl } from "@/env";
import { authHeaders } from "@/utils";

export default class WishlistApi {
  constructor() {
    this.prefix = "/wishlist";
    this.url = `${apiUrl}${this.prefix}`;

    this.adminEndpoints = {
      getAllWishlistItems: `${this.url}/items/`,
      getAllUserWishlistItems: pk => `${this.url}/items/user/${pk}`
    };

    this.endpoints = {
      getMyWishlist: `${this.url}/items/me/`,
      createWishlistItem: `${this.url}/items/`,
      getWishlistItem: pk => `${this.url}/items/${pk}`,
      updateWishlistItem: pk => `${this.url}/items/${pk}`
    };
  }

  async getAllWishlistItems(token) {
    const endpoint = this.adminEndpoints.getAllWishlistItems;

    return await fetch(endpoint, {
      method: "GET",
      headers: authHeaders(token)
    });
  }

  async getMyWishlist(token) {
    const endpoint = this.endpoints.getMyWishlist;

    return await fetch(endpoint, {
      method: "GET",
      headers: authHeaders(token)
    });
  }
}
