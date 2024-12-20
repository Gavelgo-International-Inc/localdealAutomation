const { defineConfig } = require('cypress');

const mochawesomeMerge = require('mochawesome-merge');
const generateReport = require('mochawesome-report-generator');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://locoldeal.com/",
  },
  e2e: {
    specPattern: 'cypress/e2e/Tests/*.cy.js', // Correct placement of specPattern

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
    
  }
});