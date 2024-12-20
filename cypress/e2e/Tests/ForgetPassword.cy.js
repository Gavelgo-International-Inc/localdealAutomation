import Login from "../PageObeject/login.cy";

const login=new Login();

describe('Bussiness Forget Password  Test Suite', () => {

 it('Verify Reset Password with Registered Mail', () => {
      cy.visit(Cypress.env('url'));
      login.getBussinessLoginButton().click();
      cy.wait(2000)
      login.getHeaderText().should('be.visible');
      login.getForgetPassword().click();
      login.getHeaderText().should('be.visible');
      login.enterForgetPassEmail().type('arbind.localdeal+1234@gmail.com');
      login.getResetPasswordButton().click();
      cy.wait(2000)
      login.getResetSucessmessage().should('be.visible');
    
    })


});