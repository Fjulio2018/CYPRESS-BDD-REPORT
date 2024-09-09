
import RegisterPageCy from '../Pages/RegisterPage.cy';
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


        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

    }



}

export default LoginPageCy;
