import { TestDataUtil } from '../../utils/TestDataUtil';

class RegisterPageCy {

    constructor() {

        this.userData = TestDataUtil.generateUserData();
    }

    webLocators = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        privacyBox: "[type='checkbox']",
        submitButton: "input[type='submit'][value='Continue']",
        password: "#input-password",
        passwordConf: "#input-confirm",
        accountDropdown: '.list-inline > .dropdown',
        myAccountLink: ".dropdown-menu > :nth-child(1) > a",
        editAccountLink: '.list-group > [href="https://naveenautomationlabs.com/opencart/index.php?route=account/edit"]',
        successMessages: {
            h1: 'h1',
            paragraphs: 'p',
            contactLink: 'a'
        }
    }


    visitRegisterPage(url) {
        cy.visit(url);
    }


    fillRegistrationForm(firstName, lastName, email, telephone, password) {

        const dataToUse = {
            firstName: firstName || this.userData.firstName,
            lastName: lastName || this.userData.lastName,
            email: email || this.userData.email,
            telephone: telephone || this.userData.phone,
            password: password || this.userData.password
        };


        cy.get(this.webLocators.firstName).type(dataToUse.firstName);
        cy.get(this.webLocators.lastName).type(dataToUse.lastName);
        cy.get(this.webLocators.email).type(dataToUse.email);
        cy.get(this.webLocators.telephone).type(dataToUse.telephone);
        cy.get(this.webLocators.password).type(dataToUse.password);
        cy.get(this.webLocators.passwordConf).type(dataToUse.password);
        cy.get(this.webLocators.privacyBox).check();
        cy.get(this.webLocators.submitButton).click();


        this.usedData = dataToUse;
    }


    validateRegistrationSuccess() {
        const successMessages = {
            created: 'Your Account Has Been Created!',
            congrats: 'Congratulations! Your new account has been successfully created!',
            advantage: 'You can now take advantage of member privileges to enhance your online shopping experience with us.',
            question: 'If you have ANY questions about the operation of this online shop, please e-mail the store owner.'
        };

        cy.get('#content').within(() => {
            cy.get(this.webLocators.successMessages.h1).should('contain', successMessages.created);
            cy.get('p').eq(0)
                .should('be.visible')
                .and('contain', successMessages.congrats);
            cy.get('p').eq(1)
                .should('be.visible')
                .and('contain', successMessages.advantage);
            cy.get('p').eq(2)
                .should('be.visible')
                .and('contain', successMessages.question);
            cy.get('a')
                .should('have.attr', 'href', 'https://naveenautomationlabs.com/opencart/index.php?route=information/contact')
                .and('contain', 'contact us');
            cy.get('p a').click();
        });
    }


    verifyDataInEditForm() {
        cy.get(this.webLocators.accountDropdown).click();
        cy.get(this.webLocators.myAccountLink).click();
        cy.get(this.webLocators.editAccountLink).click();

        // Valida os dados usados no registro (armazenados em this.usedData)
        cy.get(this.webLocators.firstName).should('have.value', this.usedData.firstName);
        cy.get(this.webLocators.lastName).should('have.value', this.usedData.lastName);
        cy.get(this.webLocators.email).should('have.value', this.usedData.email);
        cy.get(this.webLocators.telephone).should('have.value', this.usedData.telephone);
    }
}

export default RegisterPageCy;