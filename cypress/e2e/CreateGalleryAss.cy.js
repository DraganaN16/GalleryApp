/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"

import { createGalleryPage } from "../page_objects/createGallery"

import { commonElements } from "../page_objects/commonElements"

let gallery = {
    title: faker.lorem.word(),
    description: faker.lorem.word(),
    // image: faker.internet.url(),
    
  }


before(() => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
})

beforeEach(() => {
  cy.visit("login");
  loginPage.loginUser("draganan@gmail.com", "pokusavam100");
  cy.wait(3000);
  cy.visit("create"); ///ne treba ovo

})

describe("Create gallery- PO", () => {
  it("Create gallery with one picture", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Flower");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);

    commonElements.galleryName
    .should("exist")
    .and("contain", "Flower")
    .and("be.visible")
    .eq(0).should("contain", "Flower")
    .and("have.css", "color", "rgb(0, 0, 0)")
    .and("have.css", "font-family", "Didot, serif")
  });

  it("Create gallery with two pictures", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Flower");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408");
    createGalleryPage.addButton.click();
    createGalleryPage.imageUrlInput2.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    createGalleryPage.submitButton.click();
    cy.wait(3000);

    commonElements.galleryName
    .should("exist")
    .and("contain", "Flower")
    .and("be.visible")
    .eq(0).should("contain", "Flower")
    .and("have.css", "color", "rgb(0, 0, 0)")
    .and("have.css", "font-family", "Didot, serif")
  });


  it("Create gallery without description", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Flower");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);

    commonElements.galleryName
    .should("exist")
    .and("contain", "Flower")
    .and("be.visible")
    .eq(0).should("contain", "Flower")
    .and("have.css", "color", "rgb(0, 0, 0)")
    .and("have.css", "font-family", "Didot, serif")
  });


  it("Create gallery with 2 char title", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("xy");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    createGalleryPage.submitButton.click();
    cy.wait(3000);

    commonElements.galleryName
    .should("exist")
    .should('have.length', 1)
    .and("be.visible")
    .and("have.class", "box-title" )
    .and("have.css", "color", "rgb(0, 0, 0)")
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

    commonElements.errorMessage
    .should("contain", "The title must be at least 2 characters.")
    .and("have.class", "alert-danger")
    .and("have.css", "color", "rgb(114, 28, 36)" )
  });

  it("Image without extension", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Summer");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.imageUrlInput.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink")
    createGalleryPage.submitButton.click();
    cy.wait(3000);
    
    commonElements.errorMessage
    .should("contain", "Wrong format of image")
    .and("have.class", "alert-danger")
    .and("have.css", "color", "rgb(114, 28, 36)" )

  }); 

  it("Gallery without image", () => {
    createGalleryPage.navLink.click();
    createGalleryPage.titleInput.type("Summer");
    createGalleryPage.descriptionInput.type("tulip");
    createGalleryPage.submitButton.click();
    cy.wait(3000);
  }); 

});