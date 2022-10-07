const { defineConfig } = require("cypress")
const { cpf } = require('../cy/cypress/support/helpers/cpf.js')
const { emailGenerator } = require('../cy/cypress/support/helpers/emailGenerator.js')

module.exports = defineConfig({
    e2e: {
    baseUrl: "https://sf.vinhofacil.com.br/",
    defaultCommandTimeout: 5000,
    viewportWidth: 1480,
    viewportHeight: 800,

    setupNodeEvents(on, config) {    
    },
    
    fixturesFolder: false,
    supportFile: "../cy/cypress/support/index.js",
    supportFile: "../cy/cypress/support/helpers/emailGenerator.js",
    // supportFile: "cypress/support/helpers/cpf.js",
    },
});
