import { apiUrl } from "@/env";
import { authHeaders } from "@/utils";

export default class UserApi {
  constructor() {
    this.prefix = "/users";
    this.url = `${apiUrl}${this.prefix}`;
  }

  async getUserProfile(token) {
    const endpoint = `${this.url}/me`;

    return await fetch(endpoint, {
      method: "GET",
      headers: authHeaders(token)
    });
  }
}
