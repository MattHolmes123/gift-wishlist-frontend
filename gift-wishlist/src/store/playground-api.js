export default class PlaygroundApi {
  constructor(domain, port) {
    this.domain = domain || window.location.hostname;
    this.port = port || 8081;
  }

  async fetchPlaygroundState() {
    const endpoint = `http://${this.domain}:${this.port}/playground/get-app-state`;
    const res = await fetch(endpoint);

    return res.json();
  }
}
