import { apiUrl } from "@/env";
import { authHeaders } from "@/utils";

export default class WishlistApi {
  constructor() {
    this.prefix = "/wishlist";
    this.url = `${apiUrl}${this.prefix}`;
  }

  async getAllWishlistItems(token) {
    const endpoint = `${this.url}/items/`;

    return await fetch(endpoint, {
      method: "GET",
      headers: authHeaders(token)
    });
  }
}
