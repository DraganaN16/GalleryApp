/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"

import { loginPage } from "../page_objects/loginPage"

before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

beforeEach(() =>{
    cy.visit("login")
    cy.wait(3000);
})

describe("Login page-PO", () => {
    it("Log in with valid email and password", () =>{
        loginPage.emailInputField.type("draganaa@gmail.com");
        loginPage.passwordInputField.type("pokusavam100");
        loginPage.submitButton.click();
        cy.wait(3000);

    })
})

describe("Login page-NEG", () => {

    it("Log in without credentials", () =>{
        loginPage.submitButton.click();
        cy.wait(3000);

    });

    it("Log in without email", () => {
        loginPage.passwordInputField.type("pokusavam100");
        loginPage.submitButton.click();
        cy.wait(3000);
      });

      it("Log in without password", () => {
        loginPage.emailInputField.type("draganaa@gmail.com");
        loginPage.submitButton.click();
        cy.wait(3000);
      });
    
      it("Log in with valid email and invalid password", () => {
        loginPage.emailInputField.type("draganaa@gmail.com");
        loginPage.passwordInputField.type("111111");
        loginPage.submitButton.click();
        cy.wait(3000);
      });
    
      it("Log in with invalid email and invalid password", () => {
        loginPage.emailInputField.type("sgggdgmail");
        loginPage.passwordInputField.type("lllllll");
        loginPage.submitButton.click();
        cy.wait(3000);
      });
    


})