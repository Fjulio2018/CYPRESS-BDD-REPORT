class RegisterPageCy {
    webLocators = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        privacyBox:"[type='checkbox']",
        submitButton: "input[type='submit'][value='Continue']",
        password:"#input-password",
        passwordConf:"#input-confirm"
    }

    visitRegisterPage(url) {
        cy.visit(url);
    }

    fillFirstName(firstName) {
        cy.get(this.webLocators.firstName).type(firstName);
    }

    fillLastName(lastName) {
        cy.get(this.webLocators.lastName).type(lastName);
    }

    fillEmail(email) {
        cy.get(this.webLocators.email).type(email);
    }

    fillTelephone(telephone) {
        cy.get(this.webLocators.telephone).type(telephone);
    }

    checkPrivacy(){
        cy.get(this.webLocators.privacyBox).check();

    }
    fillPassword(password) {
        cy.get(this.webLocators.password).type(password);

    }
    fillPasswordConfirm(password) {
        cy.get(this.webLocators.passwordConf).type(password);

    }

    submitForm() {
        cy.get(this.webLocators.submitButton).click();
    }


}

export default RegisterPageCy;
