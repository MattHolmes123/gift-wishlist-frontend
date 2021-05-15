// TODO: Work out how to do this
// This is a temporary sample env file

// const env = process.env.VUE_APP_ENV;
//
// let envApiUrl = '';
//
// if (env === 'production') {
//   envApiUrl = `https://${process.env.VUE_APP_DOMAIN_PROD}`;
// } else if (env === 'staging') {
//   envApiUrl = `https://${process.env.VUE_APP_DOMAIN_STAG}`;
// } else {
//   envApiUrl = `http://${process.env.VUE_APP_DOMAIN_DEV}`;
// }

// TODO: Work out how to change this correctly.
const domain = window.location.hostname;
const port = 8081;
const api = "/api/v1";

export const apiUrl = `http://${domain}:${port}${api}`;
export const appName = "Gift Wishlist Local";
