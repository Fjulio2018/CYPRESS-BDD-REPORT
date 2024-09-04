/// <reference types="cypress"/>

export default {

    clickLoginButton() {
        cy.get('#btnLogin')
            .click({force:true})
    },

    loginMsgValidator(type, msg) {

        console.log('Tipo:', type);
        console.log('MSG:', msg);


        if (type === 'error') {



            cy.get('.invalid_input')
                .should('have.text', msg)

        } else if (type === 'success') {


            cy.get('#swal2-html-container')
                .should('have.text', msg)

        } else {

            throw new Error('Unknown message found')
        }


    },


    fillFieldsLogin(field, credential) {
        console.log('This is the Field:', field);
        console.log('This is the Credential:', credential);

        if (field === 'password') {
            cy.get('#password')
                .should('be.visible')
            cy.get('#password')
                .type(credential,{delay:0});


        } else if (field === 'email') {
            cy.get('#user')
                .should('be.visible')

            cy.get('#user')
                .type(credential,{delay:0});

        } else {
            throw new Error(`Unknown field type: ${field}`);
        }


    },

    compliteLogin(email, password) {

        // Verifica se o email não está vazio e preenche o campo de e-mail
        if (email) {
            cy.get('#user')
                .should('be.visible')
                .type(email, { delay: 0 });
        } else {
            console.log('O campo de e-mail está vazio.');
        }

        // Verifica se a senha não está vazia e preenche o campo de senha
        if (password) {
            cy.get('#password')
                .should('be.visible')
                .type(password, { delay: 0 });
        } else {
            console.log('O campo de senha está vazio.');
        }

        // Clica no botão de login
        this.clickLoginButton();
    }

}














