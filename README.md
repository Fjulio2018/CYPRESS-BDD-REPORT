# Cypress BDD com Multiple Report

Projeto com o escopo de implementar Cypres com o Cucumber e o Multiple-cucumber-html-report.
Objetivo:
- Criar projeto Cypres BDD.
- Report com gráficos explicativos.
- Contruir um ambiente próximo ao de desenvolvimento.
- Conceitos GIT, pull da MAIM, push na DEV e merge na MAIN.

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

