/// <reference types='cypress'/>

before(() => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
})

beforeEach(() => {
  cy.visit("login");
  cy.get("#email").type("draganan@gmail.com");
  cy.get("#password").type("pokusavam100");
  cy.get("button[type='submit']").click();
  cy.wait(3000);
  cy.visit("create");

})

describe("Create gallery- PO", () => {
  it("Create gallery with one picture", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("Flower");
    cy.get("#description").type("tulip");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  });

  it("Create gallery with two pictures", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("Flower");
    cy.get("#description").type("tulip");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408");
    cy.get('form > :nth-child(3) > :nth-child(3)').click();
    cy.get(":nth-child(3) > .input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    cy.get('form > :nth-child(4)').click();
    cy.wait(3000);
  });


  it("Create gallery without description", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("Flower");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  });


  it("Create gallery with 2 char title", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("xy");
    cy.get("#description").type("tulip");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  });

});



describe("Create gallery- NEG", () => {
  it("All empty field", () => {
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  });

  it("All field with spaces", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("  ");
    cy.get("#description").type("  ");
    cy.get(".input-group > .form-control").type("  ")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  });

  it("Title one character", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("X");
    cy.get("#description").type("tulip");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  });

  it("Image without extension", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("Summer");
    cy.get("#description").type("tulip");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  }); 

  it("Gallery without image", () => {
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("Summer");
    cy.get("#description").type("tulip");
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
  }); 

});