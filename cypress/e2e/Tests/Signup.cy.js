
describe('Facebook Login Test', () => {
    beforeEach(() => {

        cy.visit('https://locoldeal.com/');
    });

    it('Signup code ', () => {
        cy.get('#navbarSignUpDropdown').click()
        
        cy.xpath("(//a[@class='dropdown-item'])[1]").click()
       
        cy.xpath("//input[@formcontrolname='firstname']").type("Arbind")
        
        cy.xpath("//input[@formcontrolname='lastname']").type("Yadav")
        
        cy.xpath("//input[@placeholder='Email']").type("arbind.localdeal@gamil.com")
      
        cy.xpath("//input[@placeholder='Username']").type("arbind")
        cy.xpath("//input[@placeholder='Password']").type("Alexa@131190")
        cy.xpath("//input[@placeholder='Confirm Password']").type("Alexa@131190")
    
        cy.xpath("//input[@role='checkbox']").click()
        
        cy.xpath("//input[@type='checkbox']").click()
       
        cy.xpath(".submit-btn submit-btn-disabled").click()
       
    });


    it('Login Locoldeal Project', () => {
        cy.xpath("//button[@title='Login']").click()
        cy.xpath("//input[@name='username']").type("arbind.localdeal@gmail.com")
        cy.xpath("//input[@name='password']").type("Alexa@131190")
        cy.xpath("//div[@id='google-signin-btn']").click()


    });
});
