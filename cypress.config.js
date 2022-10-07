const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1480,
    viewportHeight: 800,
    fixturesFolder: false,
    defaultCommandTimeout: 5000,
    baseUrl: "https://sf.vinhofacil.com.br/",
    blockHosts: [
      "www.facebook.com",
      "api.omappapi.com",
      "api.rudderlabs.com",
      "api.soclminer.com.br",
      "cdn-prod.securiti.ai",
      "winealexspkv.dataplane.rudderstack.com",
    ],
  },
});
