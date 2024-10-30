# Cypress BDD with Multiple Report

This project aims to implement Cypress with Cucumber and the Multiple-cucumber-html-report.

## Objectives

- Create a Cypress BDD project.
- Generate reports with explanatory graphs.
- Build an environment similar to a development setup.
- Understand GIT concepts such as pulling from MAIN, pushing to DEV, and merging into MAIN.
- Understand CI concepts to execute tests before merging into MAIN.

## Installation

Follow the instructions below to install the project dependencies:

```bash
npm init -y  
npm install cypress
npm install cypress-cucumber-preprocessor@latest
npm install multiple-cucumber-html-reporter --save-dev


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

