
describe('Localdeal Footer Link page verify', () => {

    it('Terms and conditions page Test code ', () => {
        cy.visit('https://locoldeal.com/customer/terms-conditions')
        cy.scrollTo('bottom')
        cy.wait(5000)
        cy.get('.static-page-title').should('have.text', 'Terms & Conditions Agreement').then(() => {
            console.log('Test is Pass');
        });
    });

    it('About local deal page Test code ', () => {
        cy.visit('https://locoldeal.com/customer/aboutus')
        cy.scrollTo('bottom')
        cy.wait(5000)
        cy.get('.innerpage_banner-heading').should('have.text', 'About LocolDeal')
        cy.get('.whyChooseUs-header > .primary-heading').should('have.text', 'Why Choose Us?')

    });

    it('Privacy Policy page Test code ', () => {
        cy.visit('https://locoldeal.com/customer/privacy-policy')
        cy.scrollTo('bottom')
        cy.wait(5000)
        cy.get('h1.static-page-title').should('have.text', 'Privacy Policy')
        cy.get('#interpretation-and-definitions > .static-page-heading').should('have.text', 'Interpretation and Definitions')
        console.log('Test is pass')
    });

    it('FAQ for Service Provider Test code ', () => {
        cy.visit('https://locoldeal.com/customer/faq-service-provider')
        cy.scrollTo('bottom')
        cy.wait(5000)
        console.log('Test is pass')
    });

    it (' FAQ for Consumer Test code ', () => {
        cy.visit('https://locoldeal.com/customer/faq-consumer')
        cy.scrollTo('bottom')
        cy.wait(5000)
        cy.get('.innerpage_banner-heading').should('have.text', 'FAQ for Consumer')
        cy.get(':nth-child(3) > .accordion-item > .accordion-header > .accordion-button').click()
        console.log('Test is pass')
    });
   

});
