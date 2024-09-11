const report = require("multiple-cucumber-html-reporter");
const fs = require('fs');
const path = require('path');

// Ler as datas de início e término dos arquivos
let startTime = fs.readFileSync(path.resolve('cypress/reports/start-time.txt'), 'utf-8');
let endTime = fs.readFileSync(path.resolve('cypress/reports/end-time.txt'), 'utf-8');

// Gerar o relatório com as datas corretas
report.generate({
    jsonDir: "./cypress/cucumber-json/",
    reportPath: "./cypress/reports/html-report/report.html",
    openReportInBrowser: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "124",
        },
        device: "Laptop",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Cypress BDD POM" },
            { label: "Release", value: "Version-1.1" },
            { label: "Execution Start Time", value: new Date(startTime).toLocaleString() },
            { label: "Execution End Time", value: new Date(endTime).toLocaleString() },
        ],
    },
});
