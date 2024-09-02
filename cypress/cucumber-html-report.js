const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./cypress/cucumber-json/",
    reportPath: "./cypress/reports/html-report/report.html",
    openReportInBrowser:true,
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
            { label: "Project", value: "Demo New Tours" },
            { label: "Release", value: "Version-0" },
            { label: "Execution Start Time", value: "Nov 19th 2024, 05:00 PM IST" },
            { label: "Execution End Time", value: "Nov 19th 2024, 05:30 PM IST" },
        ],
    },
});