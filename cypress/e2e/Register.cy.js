/// <reference types='cypress'/>

const locators = require("../fixtures/locators.json");

import {faker} from '@faker-js/faker'

var firstName
var lastName
var email
var password
var passwordConfirmation


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
    
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    email = faker.internet.email();
    password = faker.internet.password();
    passwordConfirmation = faker.internet.password();

    cy.get(locators.registerPage.firstNameInputField).type(firstName);
    cy.get(locators.registerPage.lastNameInputField).type(lastName);
    cy.get(locators.registerPage.emailInputField).type(email);
    cy.get(locators.registerPage.passwordInputField).type(password);
    cy.get(locators.registerPage.passwordConfirmationInputField).type(passwordConfirmation);
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });

  it("Spaces befor first and last name", () => {
    cy.get(locators.registerPage.firstNameInputField).type("  firstName");
    cy.get(locators.registerPage.lastNameInputField).type("   lastName");
    cy.get(locators.registerPage.emailInputField).type(email);
    cy.get(locators.registerPage.passwordInputField).type(password);
    cy.get(locators.registerPage.passwordConfirmationInputField).type(passwordConfirmation);
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });

  it("Register with minimum characters in the first name", () => {
    cy.get(locators.registerPage.firstNameInputField).type("X");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("First name - numbers", () => {
    cy.get(locators.registerPage.firstNameInputField).type("111");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("Last name - char", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("@@@");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });



  it("Register with unicode characters in first name", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Драгана");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("Password with space", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam 100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam 100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("Password with 8 characters- all numbers", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("10000000");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("10000000");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  })
});



describe("Register page - NEG", () => {

  email = faker.internet.email();
  password = faker.internet.password();

  it("First name- empty field", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Peric");
    cy.get(locators.registerPage.lastNameInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("Last name - empty field", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
  });

  it("All empty field", () => {
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });

  it("Register with spaces in first and last name", () => {
    cy.get(locators.registerPage.firstNameInputField).type(" ");
    cy.get(locators.registerPage.lastNameInputField).type(" ");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });

  it("Empty passwords field", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("Confirmed password- wrong", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("talala");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });

  it("Password with 8 characters- all letters", () => {
    cy.get(locators.registerPage.firstNameInputField).type(firstName);
    cy.get(locators.registerPage.lastNameInputField).type(lastName);
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("llllllll");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("llllllll");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });



  it("Email without @, invalid format", () => {
    cy.get(locators.registerPage.firstNameInputField).type(firstName);
    cy.get(locators.registerPage.lastNameInputField).type(lastName);
    cy.get(locators.registerPage.emailInputField).type("draganaagmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  });


  it("Accepted terms and conditions isn't checked", () => {
    cy.get(locators.registerPage.firstNameInputField).type("Pera");
    cy.get(locators.registerPage.lastNameInputField).type("Peric");
    cy.get(locators.registerPage.emailInputField).type("draganaa@gmail.com");
    cy.get(locators.registerPage.passwordInputField).type("pokusavam100");
    cy.get(locators.registerPage.passwordConfirmationInputField).type("pokusavam100");
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(3000);
  })

});