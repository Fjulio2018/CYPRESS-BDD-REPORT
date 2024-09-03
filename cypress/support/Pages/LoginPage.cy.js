/// <reference types="cypress"/>

export default {

    clickLoginButton() {
        cy.get('#btnLogin')
            .click()
    },

    loginMsgValidator(type, msg) {


        if (type === 'error') {
            console.log('Tipo:', type);


            cy.get('.invalid_input')
                .should('have.text', msg)

        } else if (type === 'success') {
            console.log('Tipo:', type);
            console.log('MSG:', msg);

            cy.get('#swal2-html-container')
                .should('have.text', msg)

        } else {
            console.log('Tipo:', type);
            throw new Error('Unknown message found')
        }


    },


    fillFieldsLogin(field, credential) {

        if (field === 'password') {
            cy.get('#password')
                .should('be.visible')
            cy.get('#password').type(credential);


        } else if (field === 'email') {
            cy.get('#user')
                .should('be.visible')

            cy.get('#user').type(credential);

        } else {
            throw new Error(`Unknown field type: ${field}`);
        }


    },

    compliteLogin(email, password) {

        console.log('Email:', email);
        console.log('Password:', password);

        cy.get('#user')
            .should('be.visible')
        cy.get('#user')
            .type(email);

        cy.get('#password')
            .should('be.visible')
        cy.get('#password')
            .type(password);
        this.clickLoginButton();

    }
}














