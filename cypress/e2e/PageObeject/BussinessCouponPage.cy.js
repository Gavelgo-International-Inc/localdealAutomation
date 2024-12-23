class BussinessCouponPage
{
getHeaderText(){
    return cy.get("div[class='mb-2 common-gradient-text'] i").should('be.visible')
}
getScreenName(){
    return cy.get (".common-gradient-text.w-fit-content.mb-3").should("be.visible")
}
clickYourCouponTab(){
    return cy.get("#your-coupons").click()
}
getTabelHeading(){
    cy.get('table thead tr th').each(($header, index) => {
        const expectedHeaders = ['Brand(Company) Name',	'Coupon Code',	'Title', 'Subcategory',	'Expiration Date',	'Renew','Action']; 
        expect($header.text().trim()).to.eq(expectedHeaders[index]);
      });
}
clickCreateNewCoupon(){
    return cy.get("#create-new-coupon-tab").click();
}
uploadCouponImage(){
    return cy.get("button[class='custom-btn-purple-gradient']")
}
enterCouponDetail(){

    const randomBrand = `LocalDeal${Math.floor(Math.random() * 10000)}`; 
    const randomTitle = `20% Off - ${Math.floor(Math.random() * 100)} Items`; 
    const subCategories = ["Web Design", "Child Care", "Accounting tax", "Internet", "Legal", "Other"];
    const randomSubCategory = subCategories[Math.floor(Math.random() * subCategories.length)];


    cy.get("#brand").type(randomBrand);
    cy.get("#title").type(randomTitle);
    cy.get("#description").type(" Get 20% off on your entire purchase. Offer valid for a limited time only.")
    cy.get("#disclaimers").type("Applicable on minimum purchases of $50. Cannot be combined with other offers.")
    cy.get("#subCategory").select(randomSubCategory);
    cy.get('.dropdown-btn').click(); 
    cy.get("input[placeholder='Search']").type("Alaska")
    cy.get("ul[class='item2'] div").click();
    cy.get("input[placeholder='Enter zipcodes']").type("11111")
    cy.get(".custom-btn.custom-btn-orange.coupon-code-btn").click()
    cy.get("#weblink").type("https://locoldeal.com")

    cy.log(`Generated Brand: ${randomBrand}`);
    cy.log(`Generated Title: ${randomTitle}`);
    cy.log(`Selected SubCategory: ${randomSubCategory}`);

    
}
clickPreviewCouponButton(){
    return cy.get('.custom-btn.custom-btn-blue.ng-star-inserted').click();
}
clickViewCouponCode(){
    return cy.get(".coupon-code").click();
}
closedPreviewbox(){
    return cy.get("button[aria-label='Close']").click()
}
clickSaveCouponButton(){
    return cy.get("button[value='Save']").click();
}
confirmCreateCoupon(){
    return cy.get('.swal2-confirm').click();
}
}
export default BussinessCouponPage;