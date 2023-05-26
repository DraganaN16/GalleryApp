/// <reference types='cypress'/>

const locators = require("../fixtures/locators.json");

import {faker} from '@faker-js/faker'

var email
var password


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

    email = faker.internet.email();
    password = faker.internet.password();

    cy.get(locators.loginPage.emailInputField).type(email);
    cy.get(locators.loginPage.passwordInputField).type(password);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });
});


describe("Login page- NEG", () => {

  email = faker.internet.email();
  password = faker.internet.password(); 

  it("Log in without credentials", () => {
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in without email", () => {
    cy.get(locators.loginPage.passwordInputField).type(password);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in without password", () => {
    cy.get(locators.loginPage.emailInputField).type(email);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in with valid email and invalid password", () => {
    cy.get(locators.loginPage.emailInputField).type(email);
    cy.get(locators.loginPage.passwordInputField).type(password);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

  it("Log in with invalid email and invalid password", () => {
    cy.get(locators.loginPage.emailInputField).type(email);
    cy.get(locators.loginPage.passwordInputField).type(password);
    cy.get(locators.loginPage.submitButton).click();
    cy.wait(3000);
  });

});