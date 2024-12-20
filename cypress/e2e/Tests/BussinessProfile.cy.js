import Login from "../PageObeject/login.cy";
import BussinessMenus from "../PageObeject/BussinessMenus.cy";

const login=new Login();
const bussnessMenus = new BussinessMenus



describe('Bussiness Profile Suite', () => {

 it('Verify Profile and Brand Update', () => {

      cy.login('testuser', 'password'); // Replace with actual test credentials
      cy.wait(5000)
      bussnessMenus.getProfileMenu().click();
      bussnessMenus.brandText().should('be.visible')
      bussnessMenus.getProfileBrandMenu().click();
      bussnessMenus.firstnameText().should('be.visible')
      bussnessMenus.brandText().should('have.text', "Brand");
      bussnessMenus.enterAboutBussiness();
      bussnessMenus.bussinessCategoryText().should('include.text', 'Business Category');
      bussnessMenus.clickProfileSubmitButton();
      bussnessMenus.profileUpdateSuccessMessage().should('be.visible')

    });

it('Verify Upload Brand Image', () => {

        cy.login('testuser', 'password'); // Replace with actual test credentials
        cy.wait(5000)
        bussnessMenus.getProfileMenu().click();
        bussnessMenus.getSellerPhotoMenu().click();

 const fileName = 'Upload.png';
        bussnessMenus.uploadBrandImage().attachFile(fileName);
  
      });







  });