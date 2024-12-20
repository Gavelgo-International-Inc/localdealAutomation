//--git init
-- git add. [all changes]
-- git commit -a -m "message"
-- git push origin master
- Branch Checkout -- git checkout "BranchName"

Run Single file
npx cypress run --spec "cypress/e2e/Tests/BusinessLoginTest.cy.js"

Run all spec
npx cypress run --browser chrome
npx cypress run --headed --browser chrome