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

      // Função para garantir que a pasta de destino exista
      function ensureDirectoryExistence(dirPath) {
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
      }

      // Caminho da pasta onde as datas serão salvas
      const reportDir = path.resolve('cypress/reports');

      // Salvar a data de início quando os testes começarem
      on('before:run', () => {
        ensureDirectoryExistence(reportDir); // Garantir que a pasta exista
        const startTime = new Date();
        fs.writeFileSync(path.join(reportDir, 'start-time.txt'), startTime.toISOString());
      });

      // Salvar a data de fim quando os testes terminarem
      on('after:run', () => {
        ensureDirectoryExistence(reportDir); // Garantir que a pasta exista
        const endTime = new Date();
        fs.writeFileSync(path.join(reportDir, 'end-time.txt'), endTime.toISOString());
      });

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
    },
  },
});
