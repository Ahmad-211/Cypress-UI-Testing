const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    downloadsFolder: "cypress/downloads",  // Add this line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});