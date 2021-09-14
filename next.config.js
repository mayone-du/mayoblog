const withPWA = require("next-pwa");
module.exports = withPWA({
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  env: {
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
    API_KEY: process.env.API_KEY,
  },
  pwa: {
    dest: "/public/cache",
  },
  pageExtensions: ["page.tsx", "page.ts"],
});
