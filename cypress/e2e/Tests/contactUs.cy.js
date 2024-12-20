
describe('Contact Us Page  Login Test', () => {


    it('Send Query with Valid data Test code ', () => {
        cy.visit('https://locoldeal.com/customer/user-query')
        cy.get('#fullName').type('Arbind Yadav')
        cy.get('#email').type('arbind.localdeal@gmail.com')
        cy.get('#phoneNumber').type('9454191270')
        cy.get('.form-row > :nth-child(4) > .form-control').type('We are best software test engineer Automatoion testing message')
        cy.get('.contactForm > .btn').click()
        cy.wait(5000)
    });
    it ('Send Query with InValid data Test code ', () => {
        cy.visit('https://locoldeal.com/customer/user-query')
        cy.get('#fullName').type('Arbind Yadav')
        cy.get('#email').type('arbind.localdeal@gmail@.com')  //Invalid email
        cy.get('#phoneNumber').type('94541912702822222222')   // phone Number limit is not fix
        cy.get('.form-row > :nth-child(4) > .form-control').type('We are best software test engineer Automatoion testing message')
        cy.get('.contactForm > .btn').click()
        cy.wait(5000)
    });

    
});
