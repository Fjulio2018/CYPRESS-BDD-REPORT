/// <reference types="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegisterPageCy from '../open-cart_support/Pages/RegisterPage.cy';

const registerPage = new RegisterPageCy();

Given("I am on the register screen from {string}", (uriKey) => {
    const uri = Cypress.env(uriKey);
    registerPage.visitRegisterPage(uri);
});

When(/^I register the user "([^"]*)", "([^"]*)","([^"]*)","([^"]*)","([^"]*)"\.$/, function (firstName, lastName, email, password, telephone) {
    cy.log(firstName);
    cy.log(lastName);
    cy.log(email);
    cy.log(telephone);
    cy.log(password);

    registerPage.fillFirstName(firstName);
    registerPage.fillLastName(lastName);
    registerPage.fillEmail(email);
    registerPage.fillTelephone(telephone);
    registerPage.checkPrivacy();
    registerPage.fillPassword(password);
    registerPage.fillPasswordConfirm(password);
    //registerPage.submitForm();
});


Then(/^I see the "([^"]*)" register messagem "([^"]*)"$/, function (type, message) {
    cy.log(`Checking for ${type} message: ${message}`);

    if (type === 'success') {
        cy.get('#content').within(() => {
            cy.get('h1').should('be.visible').then($el => {
                cy.log('H1 text:', $el.text());
                expect($el.text()).to.include('Your Account Has Been Created!');
            });
            cy.get('p').first().should('be.visible').then($el => {
                cy.log('First paragraph text:', $el.text());
                expect($el.text()).to.include('Congratulations! Your new account has been successfully created!');
            });
            cy.get()
        });
    } else if (type === 'error') {

    } else {
        throw new Error(`Unknown message type: ${type}`);
    }
});



