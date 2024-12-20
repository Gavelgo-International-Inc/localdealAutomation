// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
//const cypress = require("cypress")
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://locoldeal.com'); 
    cy.get (".nav-link[routerlink='/business/signin']").click();
    cy.get('#username').type('Deal'); // Replace with the username field selector
    cy.get('#password').type('Alexa@131190'); // Replace with the password field selector
    cy.get("button[class='btn btn-primary']").click();
    cy.wait(5000) // Replace with the login button selector
  });

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';