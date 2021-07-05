const withPWA = require("next-pwa");
module.exports = withPWA({
  env: {
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
    API_KEY: process.env.API_KEY,
  },
  pwa: {
    dest: "/public/cache",
  },
});
