
// npm install --save-dev @shelex/cypress-allure-plugin
// npm install allure-commandline --save-dev

// e2e - import '@shelex/cypress-allure-plugin'

// config.js [top] -  const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// setupNodeEvents - allureWriter(on, config);
//       		return config;

// [Allure Result]  - npx cypress run --env allure=true --spec

// [Allure Report] - npx allure generate

// open - allure open