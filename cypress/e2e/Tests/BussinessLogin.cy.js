import Login from "../PageObeject/login.cy";

const login=new Login();

describe('Bussiness Login Test Suite', () => {


    it('Verify Login with Valid Email and Password', () => {
      cy.visit(Cypress.env('url'));
      login.getBussinessLoginButton().click();
      cy.wait(2000)
      login.getHeaderText().should('be.visible');
      login.getBussinessLoginText().should ('have.text', 'Business Log In')
      login.enterEmail().type('Deal')
      login.enterPassword().type('Alexa@131190')
      login.submitLoginButton().click(); 
      cy.wait(5000)
      login.getBussinessName().should('be.visible');
      login.logoutBussiness();
    })


   it('Verify Login with Inalid Email and Valid Password', () => {
          cy.visit(Cypress.env('url'));
          login.getBussinessLoginButton().click();
          cy.wait(2000)
          login.getHeaderText().should('be.visible');
          login.getBussinessLoginText().should ('have.text', 'Business Log In')
          login.enterEmail().type('DealS')
          login.enterPassword().type('Alexa@131190')
          login.submitLoginButton().click(); 
          cy.wait(2000)
          login.getLoginErrorMessage().should('be.visible');

        })

    it('Verify Login with Inalid Email and Invalid Password', () => {
            cy.visit(Cypress.env('url'));
            login.getBussinessLoginButton().click();
            cy.wait(2000)
            login.getHeaderText().should('be.visible');
            login.getBussinessLoginText().should ('have.text', 'Business Log In')
            login.enterEmail().type('Deal')
            login.enterPassword().type('Alexa@1311')
            login.submitLoginButton().click(); 
            cy.wait(2000)
            login.getLoginErrorMessage().should('be.visible');
          })
 it('Verify Create New Account link on Login Page', () => {
  cy.visit(Cypress.env('url'));
  login.getBussinessLoginButton().click();
  cy.wait(2000)
  login.getHeaderText().should('be.visible');
  login.getBussinessLoginText().should ('have.text', 'Business Log In')
  login.getSignUPLink().should('be.visible')
         
})

});