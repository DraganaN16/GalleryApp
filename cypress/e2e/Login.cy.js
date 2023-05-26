/// <reference types='cypress'/>

describe("Login page", () => {
  it("Log in with valid email and password- PO", () => {
    cy.visit("login");
    cy.get("#email").type("draganan@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  });
});

describe("Login page", () => {
  it("Log in without credentials- NEG", () => {
    cy.visit("login");
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  });

  it("Log in without email- NEG", () => {
    cy.visit("login");
    cy.get("#password").type("pokusavam100");
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  });

  it("Log in without password- NEG", () => {
    cy.visit("login");
    cy.get("#email").type("draganan@gmail.com");
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  });

  it("Log in with valid email and invalid password- NEG", () => {
    cy.visit("login");
    cy.get("#email").type("dragall@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  });

  it("Log in with invalid email and invalid password- NEG", () => {
    cy.visit("login");
    cy.get("#email").type("dragall@gmail.com");
    cy.get("#password").type("test");
    cy.get("button[type='submit']").click();
    cy.wait(3000);
  });

});