/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"

import { loginPage } from "../page_objects/loginPage"

import {commonElements} from "../page_objects/commonElements"

let user = {
    email: faker.internet.email(),
    password: faker.internet.password()
  }

before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

beforeEach(() =>{
    cy.visit("login")
    cy.wait(3000);
})

afterEach(() =>{
    cy.wait(3000);
})

describe("Login page-PO", () => {
    it("Log in with valid email and password", () =>{
        loginPage.loginUser("draganan@gmail.com", "pokusavam100");

    });

})

describe("Login page-NEG", () => {

    it("Log in without credentials", () =>{
        loginPage.submitButton.click();

    });

    it("Log in without email", () => {
        loginPage.loginUser("  ", "pokusavam100");
        commonElements.errorMessage
        .should("contain", "Bad Credentials")
        .and("be.visible")
        .and("have.class", "alert alert-danger")
        .and("be.visible")
        .and("have.css", "background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)");
    
      });

      it("Log in without password", () => {
        loginPage.loginUser("draganaa@gmail.com", " ");
        commonElements.errorMessage
        .should("contain", "Bad Credentials")
        .and("be.visible")
        .and("have.class", "alert alert-danger")
        .and("be.visible")
        .and("have.css", "background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)");

      });
    
      it("Log in with valid email and invalid password", () => {
        loginPage.loginUser("draganaa@gmail.com", "111111");
        commonElements.errorMessage
        .should("contain", "Bad Credentials")
        .and("be.visible")
        .and("have.class", "alert alert-danger")
        .and("be.visible")
        .and("have.css", "background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)");

        
      });
    
      it("Log in with invalid email and invalid password", () => {
        loginPage.loginUser(faker.internet.email(), faker.internet.password());
        commonElements.errorMessage
        .should("have.text", "Bad Credentials")
        .and("be.visible")
        .and("have.class", "alert alert-danger")
        .and("be.visible");

      });
    


})