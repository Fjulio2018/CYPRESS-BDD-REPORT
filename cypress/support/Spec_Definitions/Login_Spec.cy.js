/// <reference types="cypress"/>
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import home_page from "../Pages/HomePage.cy";
import login_page from "../Pages/LoginPage.cy";


Given("I am on the login screen", () => {
    home_page.acessLogin();

})

Given("fill {string} field with {string}", (field, credential) => {
    login_page.fillFieldsLogin(field, credential);

})

When("I click on Login", () => {
    login_page.clickLoginButton();

})
When("I fill credentials {string} and {string}", (email,password) => {
    login_page.compliteLogin(email,password);
})

Then("I see the {string} messagem {string}", (type, msg) => {


    login_page.loginMsgValidator(type, msg);

});
