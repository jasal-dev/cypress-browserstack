# cypress-browserstack

Command: npx browserstack-cypress run -s cypress/e2e/google.cy.js

Result:
jasal@Jaakkos-MacBook-Pro cypress-browserstack % npx browserstack-cypress run -s cypress/e2e/google.cy.js
[8/28/2024, 1:29:03 PM] - info: Reading config from /Users/jasal/Git/cypress-browserstack/browserstack.json
(node:8640) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
[8/28/2024, 1:29:03 PM] - warn: testObservability is set to true. Other test reporters you are using will be automatically disabled. Learn more at browserstack.com/docs/test-observability/overview/what-is-test-observability
[8/28/2024, 1:29:04 PM] - info: Getting cypress package version from module path = 13.14.0
[8/28/2024, 1:29:05 PM] - info: Running npx cypress run -s cypress/e2e/google.cy.js --reporter /Users/jasal/Git/cypress-browserstack/node_modules/browserstack-cypress-cli/bin/testObservability/reporter

DevTools listening on ws://127.0.0.1:54052/devtools/browser/0deb4b90-6fe4-4fac-b178-8d79813bfd33
2024-08-28 13:29:06.693 Cypress[8734:101760766] WARNING: Secure coding is not enabled for restorable state! Enable secure coding by implementing NSApplicationDelegate.applicationSupportsSecureRestorableState: and returning YES.

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.14.0                                                                        │
  │ Browser:        Electron 118 (headless)                                                        │
  │ Node Version:   v20.16.0 (/Users/jasal/.nvm/versions/node/v20.16.0/bin/node)                   │
  │ Specs:          1 found (google.cy.js)                                                         │
  │ Searched:       cypress/e2e/google.cy.js                                                       │
  │ Experiments:    experimentalMemoryManagement=true                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  google.cy.js                                                                    (1 of 1)

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     google.cy.js                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  google.cy.js                             00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:01        1        1        -        -        -  

/Users/jasal/Git/cypress-browserstack/node_modules/browserstack-cypress-cli/bin/testObservability/helper/helper.js:496
exports.requestQueueHandler = new RequestQueueHandler();
                              ^

TypeError: RequestQueueHandler is not a constructor
    at Object.<anonymous> (/Users/jasal/Git/cypress-browserstack/node_modules/browserstack-cypress-cli/bin/testObservability/helper/helper.js:496:31)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Module.require (node:internal/modules/cjs/loader:1233:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (/Users/jasal/Git/cypress-browserstack/node_modules/browserstack-cypress-cli/bin/testObservability/helper/requestQueueHandler.js:6:32)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)

Node.js v20.16.0
[8/28/2024, 1:29:13 PM] - info: Cypress process exited with code 0

[8/28/2024, 1:29:13 PM] - info: Visit https://observability.browserstack.com/builds/redacted to view build report, insights, and many more debugging information all at one place!