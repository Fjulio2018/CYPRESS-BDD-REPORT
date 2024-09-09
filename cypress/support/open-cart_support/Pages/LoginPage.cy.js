import {TestDataUtil} from '../../utils/TestDataUtil';
class LoginPageCy {

    webLocators = {
        email: "#input-email",
        password: "#input-password",
        loginButton: "input[type='submit'][value='Login']"
    };

    visitLoginPage(url) {
        cy.visit(url);
    }


    fillEmail(email) {
        cy.get(this.webLocators.email).type(email);
    }

    fillPassword(password) {
        cy.get(this.webLocators.password).type(password);
    }

    clickLoginButton() {
        cy.get(this.webLocators.loginButton).click();
    }

    completeLogin(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickLoginButton();
    }

    loginAlreadyRegistrationUser(email, password){
        const userData = TestDataUtil.generateUserData();
        const generatedEmail = email || this.userData.email;
        const generatedPassword = password || this.userData.password;
        cy.get('.list-inline > .dropdown').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('#input-email').type(generatedEmail);
        cy.get('#input-password').type(generatedPassword);
        cy.get('form > .btn').click();

    }

}

export default LoginPageCy;
