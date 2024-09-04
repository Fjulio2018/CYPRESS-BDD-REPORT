const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Carregar env.config.properties
const envPath = path.resolve('config/env.config.properties');
const envConfig = dotenv.parse(fs.readFileSync(envPath));

// Carregar conf.properties
const testConfigPath = path.resolve('config/conf.properties');
const testConfig = dotenv.parse(fs.readFileSync(testConfigPath));

// Merge as configurações carregadas com as variáveis de ambiente do Cypress
const mergedEnvConfig = {
  ...envConfig,
  ...testConfig,
};

module.exports = defineConfig({
  env: mergedEnvConfig,
  projectId: 'dny4ex',
  e2e: {
    baseUrl: mergedEnvConfig.Base_URI_QAzando, // Exemplo de uso da URI carregada
    // specPattern: "**/*.feature",
    specPattern: "**/UserRegister.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
