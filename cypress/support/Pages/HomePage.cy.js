/// <reference types="cypress"/>


export default {
    acessLogin() {
        cy.visit('/')

        cy.get('#top_header')

        cy.get('.fa-user')
            .click()
    },



}