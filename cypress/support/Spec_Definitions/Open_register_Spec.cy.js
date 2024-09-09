/// <reference types="cypress"/>
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import RegisterPageCy from '../open-cart_support/Pages/RegisterPage.cy';
import LoginPageCy from '../open-cart_support/Pages/LoginPage.cy';
import {TestDataUtil} from '../utils/TestDataUtil';

const registerPage = new RegisterPageCy();
const loginPage = new LoginPageCy();
const userData = TestDataUtil.generateUserData();

Given("I am on the register screen from {string}", (uriKey) => {
    const uri = Cypress.env(uriKey);
    registerPage.visitRegisterPage(uri);
});

When(/^I register the user "([^"]*)", "([^"]*)","([^"]*)","([^"]*)","([^"]*)"\.$/, (firstName, lastName, email, password, telephone) => {
    registerPage.fillRegistrationForm(firstName || userData.firstName, lastName || userData.lastName, email || userData.email, telephone || userData.phone, password || userData.password);
});

Then(/^I see the "([^"]*)" user register messagem "([^"]*)"$/, (UserOfData, message) => {
    if (UserOfData === 'non-existent') {
        registerPage.validateRegistrationSuccess();
        cy.url().should('include', 'contact');
    } else if (UserOfData === 'already-existent') {
        cy.get('.alert')
            .should('be.visible')
            .and('contain', message);
    }
});



Then(/^I double check in data register with "([^"]*)"\.$/, function (UserOfData) {
    if (UserOfData === 'non-existent') {
        registerPage.verifyDataInEditForm();
    } else if (UserOfData === 'already-existent') {
        registerPage.loginAlready();
        registerPage.verifyDataInEditForm();
    }

});