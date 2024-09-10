const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenv = require('dotenv');

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
    baseUrl: mergedEnvConfig.Base_URI_OPENCART || mergedEnvConfig.Base_URI_QAZANDO, // Use o valor carregado ou um valor padrão
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

      // Definir as tarefas personalizadas
      on('task', {
        loadUserData(fileName) {
          const filePath = path.resolve('cypress/fixtures', fileName);
          if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath));
          }
          return { users: [] }; // Retorna uma estrutura padrão se o arquivo não existir
        },
        saveUserData({ fileName, data }) {
          const filePath = path.resolve('cypress/fixtures', fileName);
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
          return null; // O retorno pode ser qualquer valor, pois não há valor específico para retornar
        },
      });

      // Você pode adicionar outras configurações de eventos aqui, se necessário
    },
  },
});
