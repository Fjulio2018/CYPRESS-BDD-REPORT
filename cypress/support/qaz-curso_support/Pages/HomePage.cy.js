/// <reference types="cypress"/>


export default {
    acessLogin(uriKey) {
        const baseUrl = Cypress.env(uriKey);
        cy.visit(baseUrl);

        cy.get('#top_header')

        cy.get('.fa-user')
            .click()
    },


}