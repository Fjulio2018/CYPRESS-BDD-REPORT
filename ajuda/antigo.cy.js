/// <reference types="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegisterPageCy from '../open-cart_support/Pages/RegisterPage.cy';
import { TestDataUtil } from '../utils/TestDataUtil';

const registerPage = new RegisterPageCy();
const userData = TestDataUtil.generateUserData();

Given("I am on the register screen from {string}", (uriKey) => {
    const uri = Cypress.env(uriKey);
    registerPage.visitRegisterPage(uri);
});

When(/^I register the user "([^"]*)", "([^"]*)","([^"]*)","([^"]*)","([^"]*)"\.$/, function (firstName, lastName, email, password, telephone) {
    const generatedFirstName = firstName || userData.firstName;
    const generatedLastName = lastName || userData.lastName;
    const generatedEmail = email || userData.email;
    const generatedPassword = password || userData.password;
    const generatedTelephone = telephone || userData.phone;

    cy.log(generatedFirstName);
    cy.log(generatedLastName);
    cy.log(generatedEmail);
    cy.log(generatedPassword);
    cy.log(generatedTelephone);

    registerPage.fillFirstName(generatedFirstName);
    registerPage.fillLastName(generatedLastName);
    registerPage.fillEmail(generatedEmail);
    registerPage.fillTelephone(generatedTelephone);
    registerPage.checkPrivacy();
    registerPage.fillPassword(generatedPassword);
    registerPage.fillPasswordConfirm(generatedPassword);
    registerPage.submitForm();
});

Then(/^I see the "([^"]*)" register message "([^"]*)"$/, function (UserOfData, message) {
    if (UserOfData === 'non-existent') {
        cy.get('#content').within(() => {
            cy.get('h1').should('be.visible').and('contain', 'Your Account Has Been Created!');
            cy.get('p').eq(0).should('be.visible').and('contain', 'Congratulations! Your new account has been successfully created!');
            cy.get('p').eq(1).should('be.visible').and('contain', 'You can now take advantage of member privileges...');
            cy.get('a').should('have.attr', 'href', 'https://naveenautomationlabs.com/opencart/index.php?route=information/contact')
                .and('contain', 'contact us')
                .and('be.visible');
            cy.get('a').click();
            cy.url().should('include', 'contact'); // Verifica que foi redirecionado para a página de contato
            cy.get('h1').should('contain', 'Contact Us');
        });
    } else if (UserOfData === 'already-existent') {
        cy.get('.alert').should('be.visible').and('contain', message);
    } else {
        throw new Error(`Unknown message type: ${UserOfData}`);
    }
});

Then(/^I double check in data register "([^"]*)", "([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)"\.$/, function (firstName, lastName, email, password, telephone, UserOfData) {
    cy.get('.list-inline > .dropdown').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();

    if (UserOfData === 'non-existent') {
        const generatedFirstName = firstName || userData.firstName;
        const generatedLastName = lastName || userData.lastName;
        const generatedEmail = email || userData.email;
        const generatedPassword = password || userData.password;
        const generatedTelephone = telephone || userData.phone;

        cy.log(generatedFirstName);
        cy.log(generatedLastName);
        cy.log(generatedEmail);
        cy.log(generatedPassword);
        cy.log(generatedTelephone);

        cy.get('.list-group > [href="https://naveenautomationlabs.com/opencart/index.php?route=account/edit"]').click();

        cy.get('#input-firstname').should('have.value', generatedFirstName);
        cy.get('#input-lastname').should('have.value', generatedLastName);
        cy.get('#input-email').should('have.value', generatedEmail);
        cy.get('#input-telephone').should('have.value', generatedTelephone);
    } else if (UserOfData === 'already-existent') {
        cy.log('Tipo do teste:', UserOfData);
        cy.get('.list-group > [href="https://naveenautomationlabs.com/opencart/index.php?route=account/login"]').click();
    } else {
        throw new Error(`Unknown message type: ${UserOfData}`);
    }
});
