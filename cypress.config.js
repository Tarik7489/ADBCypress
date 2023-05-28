const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

//const { defineConfig } = require("cypress");





// module.exports = defineConfig({

//   e2e: {

//     setupNodeEvents(on, config) {

//       // implement node event listeners here

//     },

//   },

// });

// const xlsx = require("xlsx");

// const mysql = require("mysql");

// const syncsql = require("sync-sql");




// const { defineConfig } = require('cypress')




// module.exports = defineConfig({

//   // setupNodeEvents can be defined in either

//   // the e2e or component configuration

//   e2e: {

//     setupNodeEvents(on, config) {

//       on('task', {

//         log(message) {

//           console.log(message)




//           return null

//         },

//       })

//     },

//   },

// })

const { sqlQueryPlugin } = require('cypress-multiple-db-sql-server');





const { defineConfig } = require("cypress");




const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({

  //junit report

  //  reporter: 'mocha-junit-reporter',

  //reporterOptions: {

  // mochafile: 'cypress/reports/junitreport-[hash].xml',

  //toConsole: true

  // },





  //mocha report
  // reporter: 'cypress-mochawesome-reporter',

  // reporterOptions: {

  // reportDir: 'test-report',
  // overwrite:  false,
  // saveJson: true,
  // saveHtml: true,

  // reportFilename: 'cypressreport',
  // timestamp: 'yyyy_mm_dd_hh_MM',



  //   charts: true,

  //   reportPageTitle: 'custom-title',

  //   embeddedScreenshots: true,

  //   inlineAssets: true,

  //   saveAllAttempts: false,

  // },


  //generate multi report
  

  
  reporter: 'cypress-multi-reporters',

 

  reporterOptions: {

    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',

    mochawesomeReporterOptions: {




     

      reportDir: 'cypress/reports',

      overwrite: false,

      saveJson: true,

      saveHtml: true,




      reportFilename: 'cypressreport',

      timestamp: 'yyyy_mm_dd_hh_MM',

      charts: true,

      reportPageTitle: 'custom-title',

      embeddedScreenshots: true,

      inlineAssets: true,

      saveAllAttempts: false,

    },

  },
  
    
  mochaJunitReporterReporterOptions: {
    mochafile: 'cypress/reports/junitreport-[hash].xml',
    toConsole: true
  },




  "chromeWebSecurity": false,




  env: {

    envurl: 'env1',

    appUrl: 'https://www.amazon.in',

    titlekeyword: "Online",

    env1: '',

    env2: '',

    env3: '',

    db: {

      authentication: {

        type: 'default',

        options: {

          userName: 'sa',

          password: 'sqladmin@123'

        }

      },

      server: '172.16.0.56',

      options: {

        database: '',

        encrypt: true,

        rowCollectionOnRequestCompletion: true,

        trustServerCertificate: true,

        port: 1433, // Default Port

      }

    }

  },

  e2e: {

    specPattern: ["cypress/E2E/features/*.feature", "cypress/E2E/*.cy.js"],

    env: {

      allureReuseAfterSpec: true,

    },




    //baseUrl: 'http://sat-qa-api-1367964791.us-east-1.elb.amazonaws.com:80',

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);




      // implement node event listeners here

      on('task', { ...sqlQueryPlugin });

      on('task', { downloadFile })

      on("before:browser:launch", (browser = {}, launchOptions) => {

        prepareAudit(launchOptions);

      });




      on("task", {

        lighthouse: lighthouse(),

      });




      preprocessor.addCucumberPreprocessorPlugin(on, config);




      on(

        "file:preprocessor",

        createBundler({

          plugins: [createEsbuildPlugin.default(config)],

        })

      );

      allureWriter(on, config);

      return config;




    },

    viewportWidth: 1440,

    viewportHeight: 900,

  },

});