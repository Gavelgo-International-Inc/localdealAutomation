class BussinessMenus{

getProfileMenu(){
    return cy.xpath("//span[normalize-space()='My Profile']")
}
getCouponMenu(){
    return cy.get (".dashboard_sidebar-link[routerlink='/partner']")
}

getDealMenu(){
    return cy.get ("li[id='deals-dd'] a[class='dashboard_sidebar-link']")
}

getActiveDealMenu(){
    return cy.get ("a[href='/partner/deals-active;status=active']")
}
getDeaftDealMenu(){
    return cy.get ("li[id='deals-dd'] li:nth-child(1) a:nth-child(1)")
}
getInActiveDealMenu(){
    return cy.get ("a[href='/partner/deals-inactive;status=inactive']")
}
getOrderMenu(){
    return cy.get ("a[href='/partner/orders']")
}
getAnalyticsMenu(){
    return cy.get ("a[href='/partner/analytics']")
}
getMyProfile(){
    return cy.xpath("//h4[normalize-space()='My Profile']")
}
getProfileBrandMenu(){
    return cy.get ("#profile")
}
getSellerPhotoMenu(){
    return cy.get ("#photos")
}
getStoreLocation(){
    return cy.get("#locations")
}
firstnameText(){
    return cy.xpath("//label[normalize-space()='First Name']")
}
brandText(){
    return cy.xpath ("//h4[normalize-space()='Brand']")
}
enterAboutBussiness(){
    return cy.get("#description").type ('About Bussiness')
}
bussinessCategoryText(){
    return cy.xpath ("//label[normalize-space()='Business Category']")
}
clickProfileSubmitButton(){
    return cy.get ("button[class='submitbtn']").click();
}
profileUpdateSuccessMessage(){
    return cy.get("#toast-container")
}
uploadBrandImage(){
    return cy.get("label[for='sellerPhoto']")
}
}

export default BussinessMenus;