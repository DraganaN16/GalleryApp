/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"

import { createGalleryPage } from "../page_objects/createGallery"


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
  cy.visit("login");
  cy.get("#email").type("draganan@gmail.com");
  cy.get("#password").type("pokusavam100");
  cy.get("button[type='submit']").click();
  cy.wait(3000);
  cy.visit("create");

})

describe("Create gallery- PO", () => {
  it("Create gallery with one picture", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Flower");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  });

  it("Create gallery with two pictures", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Flower");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408");
    cy.get('form > :nth-child(3) > :nth-child(3)').click();
    cy.get(":nth-child(3) > .input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    cy.get('form > :nth-child(4)').click();
    cy.wait(3000);
  });


  it("Create gallery without description", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Flower");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  });


  it("Create gallery with 2 char title", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("xy");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  });

});



describe("Create gallery- NEG", () => {
  it("All empty field", () => {
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  });

  it("All field with spaces", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("  ");
    createGalleryPage.descriptionInput.type("  ");
    createGalleryPage.imageUrlInput.type("  ")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  });

  it("Title one character", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("X");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  });

  it("Image without extension", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Summer");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  }); 

  it("Gallery without image", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Summer");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  }); 

});