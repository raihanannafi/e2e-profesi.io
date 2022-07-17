const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "./reports",
    charts: true,
    reportPageTitle: 'End to End Automation Testing',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video: true,
  videosFolder: './reports',
  viewportHeight: 720,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://dev-company.profesi.io',
    experimentalSessionAndOrigin: true
  }
});
