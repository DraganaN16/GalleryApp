// <reference types='cypress'/>
 
import {faker} from "@faker-js/faker"

import { registerPage } from "../page_objects/registerPage"

import { commonElements } from "../page_objects/commonElements"

let user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }

before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

  beforeEach(() => {
    cy.visit("register");
  })

  describe("Register page - PO", () => {

    it("Registration with valid credentials", () => {
      registerPage.registerNewUser("Pera", "Peric", "draganan55@gmail.com", "pokusavam100", "pokusavam100")
      cy.wait(3000);
    });

    it.only("Registration with valid credentials", () => {
       registerPage.firstNameInputField.type("Pera");
       registerPage.lastNameInputField.type("Peric");
       registerPage.emailInputField.type(user.email);
       registerPage.passwordInputField.type(user.password);
       registerPage.passwordConfirmationInputField.type(user.password);
       registerPage.checkbox.check();
       registerPage.submitButton.click();
      cy.wait(3000);
    });
  
    it("Spaces befor first and last name", () => {
      registerPage.firstNameInputField.type("  Pera");
      registerPage.lastNameInputField.type("   Peric");
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
    it("Register with minimum characters in the first name", () => {
      registerPage.firstNameInputField.type("X");
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });

    it("Register with maximum characters in the first name", () => {

      var d = "";
      for(let i=0; i<255;i++){
        d+= 'd';
      }

      registerPage.firstNameInputField.type(d);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("First name - numbers", () => {
      registerPage.firstNameInputField.type("111");
      registerPage.lastNameInputField.type(user.firstName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("Last name - char", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type("@@@");
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
  
    it("Register with unicode characters in first name", () => {
      registerPage.firstNameInputField.type("Драгана");
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("Password with space", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type("pokusavam 100");
      registerPage.passwordConfirmationInputField.type("pokusavam 100");
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("Password with 8 characters- all numbers", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type("10000000");
      registerPage.passwordConfirmationInputField.type("10000000");
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    })
  });
  
  
  
  describe("Register page - NEG", () => {
  
    it("First name- empty field", () => {
      registerPage.firstNameInputField.clear();
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("Last name - empty field", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.clear();
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
    });
  
    it("All empty field", () => {
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
    it("Register with spaces in first and last name", () => {
      registerPage.firstNameInputField.type(" ");
      registerPage.lastNameInputField.type(" ");
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
    it("Empty passwords field", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.firstNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("Confirmed password- wrong", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type("pokusavam100");
      registerPage.passwordConfirmationInputField.type("talala");
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
    it("Password with 8 characters- all letters", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type("llllllll");
      registerPage.passwordConfirmationInputField.type("llllllll");
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
  
    it("Email without @, invalid format", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type("draganaagmail.com");
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.checkbox.check();
      registerPage.submitButton.click();
      cy.wait(3000);
    });
  
  
    it("Accepted terms and conditions isn't checked", () => {
      registerPage.firstNameInputField.type(user.firstName);
      registerPage.lastNameInputField.type(user.lastName);
      registerPage.emailInputField.type(user.email);
      registerPage.passwordInputField.type(user.password);
      registerPage.passwordConfirmationInputField.type(user.password);
      registerPage.submitButton.click();
      cy.wait(3000);
    })
  
  });