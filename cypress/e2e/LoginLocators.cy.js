/// <reference types='cypress'/>

const locators = require("../fixtures/locators.json");

import {faker} from '@faker-js/faker'

let user = {
  email: faker.internet.email(),
  password : faker.internet.password()
}



before(() => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
})


beforeEach(() => {
  cy.visit("login");
}) 

describe("Login page- PO", () => {
  it("Log in with valid email and password", () => {

    cy.get(locators.loginPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.loginPage.passwordInputField).type("pokusavam100");
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });
});


describe("Login page- NEG", () => {

  it("Log in without credentials", () => {
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in without email", () => {
    cy.get(locators.loginPage.passwordInputField).type(user.password);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in without password", () => {
    cy.get(locators.loginPage.emailInputField).type(user.email);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in with valid email and invalid password", () => {
    cy.get(locators.loginPage.emailInputField).type(user.email);
    cy.get(locators.loginPage.passwordInputField).type("111111");
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in with invalid email and invalid password", () => {
    cy.get(locators.loginPage.emailInputField).type("sgggdgmail");
    cy.get(locators.loginPage.passwordInputField).type("lllllll");
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

});