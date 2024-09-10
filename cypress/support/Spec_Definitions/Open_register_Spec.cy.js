/// <reference types="cypress"/>
import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import RegisterPageCy from '../open-cart_support/Pages/RegisterPage.cy';
import LoginPageCy from '../open-cart_support/Pages/LoginPage.cy';
import { TestDataUtil } from '../utils/TestDataUtil';

const registerPage = new RegisterPageCy();
const loginPage = new LoginPageCy();

let userData;

Before(() => {
    // Carregar dados do usuário existentes e gerar novos dados
    cy.task('loadUserData', 'userData.json').then(existingUsers => {
        userData = TestDataUtil.generateUserData(existingUsers.users);

        // Salvar os dados do novo usuário
        return cy.task('saveUserData', { fileName: 'userData.json', data: { users: [...existingUsers.users, userData] } });
    });
});


Given(/^I am on the register screen from "([^"]*)"$/, function (uriKey) {
    cy.log('Esta é e uriKey: ', uriKey)
    const uri = Cypress.env(uriKey);
    registerPage.visitRegisterPage(uri);
});


When(/^I register the user "([^"]*)", "([^"]*)","([^"]*)","([^"]*)","([^"]*)"\.$/, (firstName, lastName, email, password, telephone) => {
    cy.log(userData.firstName);
    registerPage
        .fillRegistrationForm(
            firstName || userData.firstName,
            lastName || userData.lastName,
            email || userData.email,
            telephone || userData.phone,
            password || userData.password
        );
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
