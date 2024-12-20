class Login {

    visit() {
        return cy.visit(cypress.env('url'));
    }

    getBussinessLoginButton() {
        return cy.get(".nav-link[routerlink='/business/signin']")
    }

    getHeaderText() {
        return cy.get('.form-top-title')
    }

    getBussinessLoginText() {
        return cy.get(".text-center.title.ng-star-inserted");
    }

    enterEmail(username) {
        return cy.get("#username")
    }

    enterPassword(password) {
        return cy.get("#password")
    }

    submitLoginButton() {
        return cy.xpath("//button[normalize-space()='Login']").click()
    }
    getBussinessName(){
        return cy.xpath("//h4[normalize-space()='Hi, Deal']")
    }
    getForgetPassword() {
        return cy.get("div[class='forgot-password'] a");
    }

    getSignUPLink() {
        return cy.get(".sign-up-link");
    }
 logoutBussiness(){
    cy.get("a[title='Logout']").click()
    cy.xpath("//button[normalize-space()='Logout']").click()
 }
 getLoginErrorMessage() {
    return cy.get("#toast-container").should('be.visible');
  }
  enterForgetPassEmail(){
    return cy.get ("input[placeholder='Enter Your Email']");
  }
  getResetPasswordButton(){
    return cy.get ("button[class='submit-btn']")
  }
getResetSucessmessage(){
    return cy.get("#toast-container")
}
}

export default Login;