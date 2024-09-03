# Cypress BDD com Multiple Report

Projeto com o escopo de implementar Cypress com o Cucumber e o Multiple-cucumber-html-report.

Objetivos:
- Criar projeto Cypress BDD.
- Report com gráficos explicativos.
- Construir um ambiente próximo ao de desenvolvimento.
- Conceitos do GIT como pull da MAIM, push na DEV e merge na MAIN.
- Conceitos de CI para executar testes antes do merge na MAIN.

## Instalação

Instruções para instalar as dependências do projeto.

npm init -y  
npm install cypress

npm install cypress-cucumber-preprocessor@latest

npm install multiple-cucumber-html-reporter --save-dev

```bash
## comando para Rodar e gerar report

npm run run-tests  

node cypress/cucumber-html-report.js

