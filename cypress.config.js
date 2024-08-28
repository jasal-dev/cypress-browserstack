const { defineConfig } = require('cypress')
const browserstackTestObservabilityPlugin = require('browserstack-cypress-cli/bin/testObservability/plugin');

module.exports = defineConfig({
  env: {
  },
  numTestsKeptInMemory: 1,
  experimentalMemoryManagement: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  trashAssetsBeforeRuns: false,
  videosFolder: 'data/cypress/videos',
  screenshotsFolder: 'data/cypress/screenshots',
  video: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'data/cypress/mochawesome-report-test',
    reportFilename: 'report-test',
    overwrite: false,
    html: true,
    json: false,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: 'https://google.com',
    excludeSpecPattern: '{**/examples/*.js,mobile.cy.js}',
    setupNodeEvents(on, config) {
      //REMEMBER TO ADD same content to each environment specific config file
      browserstackTestObservabilityPlugin(on, config);
      return config;
    },
  },
})
