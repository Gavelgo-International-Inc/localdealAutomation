class BussinessMenus{

getProfileMenu(){
    return cy.xpath("//span[normalize-space()='My Profile']")
}
getCouponMenu(){
    return cy.get (".dashboard_sidebar-link[routerlink='/partner']").click()
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
getStoreLocationText(){
    return cy.xpath("//h3[normalize-space()='Store Locations']")

}
getOneMoreLocation(){
    return cy.get("button[value='Add one more']")
}
enterStoreName(){
    return cy.xpath ("(//input[@placeholder='Search Store Location'])[1]").type("LocalDeal")
}
selectStoreType(value) {
    return cy.get("#locationType").select(value);
  }
selectOnlineBusinessType() {
    cy.get("#locationType").select('online');
    cy.get("#locationType").should('have.value', 'online');
  }

selectOfflineBusinessType() {
    cy.get("#locationType").select('offline');
    cy.get("#locationType").should('have.value', 'offline');
  }

getBussinessHourText(){
    return cy.xpath("(//label[normalize-space()='Business Hours'])[1]").should('be.visible')
}
getAvailableTime(){
    return cy.get(".available-time-container").should('be.visible')
}
clickSaveBussinesslocation(){
    return cy.get("button[class='custom-btn-purple-gradient m-0']").click()
}

locationUpdateSuccessMessage(){
    return cy.get("#toast-container")
}

UpdateOfflineBussinessAddress(){
    cy.xpath("(//textarea[@placeholder='Store Address'])[1]").type("Offline Bussiness Address")
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Phone'])[2]").type('9621852538')
    cy.xpath("(//input[@placeholder='City'])[1]").type("Alaska")
    //cy.xpath("//select[@formcontrolname='country']").click()
    cy.xpath("//select[@formcontrolname='country']").first().select('United States');
    cy.wait(2000)
    cy.xpath("//select[@formcontrolname='state'][1]").first().select("Alaska")
    cy.wait(2000)
    cy.get('.col-12.ng-dirty > .card > .card-body > :nth-child(1) > :nth-child(11) > .form-group > .form-control').type('11111');

}

}

export default BussinessMenus;