import Login from "../PageObeject/login.cy";
import BussinessMenus from "../PageObeject/BussinessMenus.cy";
import BussinessCouponPage from "../PageObeject/BussinessCouponPage.cy";

const login=new Login();
const bussnessMenus = new BussinessMenus
const bussinessCouponPage = new BussinessCouponPage


describe('Bussiness Coupon Test Suit', () => {

 it('Verify Your Coupon Screen', () => {

      cy.login('testuser', 'password');
      bussnessMenus.getCouponMenu();
      bussinessCouponPage.getHeaderText();
      bussinessCouponPage.getScreenName();
      bussinessCouponPage.getTabelHeading()

    })

it('Verify Create New Coupon', () => {

        cy.login('testuser', 'password');
        bussnessMenus.getCouponMenu();
        bussinessCouponPage.clickCreateNewCoupon()
        const fileName = 'Upload.png';
        bussinessCouponPage.uploadCouponImage().attachFile(fileName);
        cy.wait(2000)
        bussinessCouponPage.enterCouponDetail();
        bussinessCouponPage.clickSaveCouponButton();
        bussinessCouponPage.confirmCreateCoupon();

        
});
    it('Verify able to Preview Created Coupon', () => {

        cy.login('testuser', 'password');
        bussnessMenus.getCouponMenu();
        bussinessCouponPage.clickCreateNewCoupon()
        const fileName = 'Upload.png';
        bussinessCouponPage.uploadCouponImage().attachFile(fileName);
        cy.wait(2000)
        bussinessCouponPage.enterCouponDetail();
       bussinessCouponPage.clickPreviewCouponButton();
       cy.wait(2000)
       bussinessCouponPage.closedPreviewbox();
       bussinessCouponPage.clickSaveCouponButton();
       bussinessCouponPage.confirmCreateCoupon();
      });

  
      })