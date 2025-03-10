import { apiUrl } from "@/env";
import { authHeaders } from "@/utils";

export default class LoginApi {
  constructor() {
    this.prefix = "/login";
    this.url = `${apiUrl}${this.prefix}`;
  }

  async login(username, password) {
    const endpoint = `${this.url}/access-token`;

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    return await fetch(endpoint, { method: "POST", body: formData });
  }

  async testToken(token) {
    const endpoint = `${this.url}/test-token`;

    return await fetch(endpoint, {
      method: "POST",
      headers: authHeaders(token)
    });
  }
}
