/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"
import { editGallery } from "../page_objects/editGallery"

let gallery = {
    title: faker.lorem.word(),
    description: faker.lorem.word()  
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
    cy.get(".mr-auto > :nth-child(3) > .nav-link").click();
    cy.get("#title").type("Flower");
    cy.get("#description").type("tulip");
    cy.get(".input-group > .form-control").type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    cy.get("form > :nth-child(4)").click();
    cy.wait(3000);
    cy.get(":nth-child(1) > h2 > .box-title").type("Flower");
    cy.get("a.btn").click();
})

describe("Edit gallery- PO", () => {
    it("Edit gallery 'Flower'", () => {
      editGallery.titleInput.clear().type(gallery.title);
      editGallery.descriptionInput.clear().type(gallery.description);
      editGallery.imageUrlInput.clear().type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408")
      editGallery.submitButton.click();
      cy.wait(3000);
    });

    it("Edit gallery tile 'Flower' into special characters", () => {
        editGallery.titleInput.clear().type("***");
        editGallery.descriptionInput.clear().type(gallery.description);
        editGallery.imageUrlInput.clear().type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408");
        editGallery.submitButton.click();
        cy.wait(3000);
    });

    it("Cancel the gallery editing", () => {
        editGallery.titleInput.clear().type(gallery.title);
        editGallery.descriptionInput.clear().type(gallery.description);
        editGallery.imageUrlInput.clear().type("https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        editGallery.cancelButton.click();
        editGallery.allGalleries.click();
        cy.wait(3000);
    });  
})

describe("Edit gallery- NEG", () => {
    it("Edit gallery 'Flower'", () => {
      editGallery.titleInput.clear().type("*");
      editGallery.descriptionInput.clear().type(gallery.description);
      editGallery.imageUrlInput.clear().type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408")
      editGallery.submitButton.click();
      cy.wait(3000);
    });

    it("Edit gallery title to 256 character", () => {

      var d = "";
      for(let i=0; i<256;i++){
        d+= 'd';
      }
        editGallery.titleInput.clear().type(d);
        editGallery.descriptionInput.clear().type(gallery.description);
        editGallery.imageUrlInput.clear().type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408")
        editGallery.submitButton.click();
        cy.wait(3000);
      });

    it("Edit gallery 'Flower' by deliting a image", () => {
        editGallery.titleInput.type(gallery.title);
        editGallery.descriptionInput.clear().type(gallery.description);
        editGallery.imageUrlInput.clear();
        editGallery.submitButton.click();
        cy.wait(3000);
      });

      it("Edit gallery 'Flower' by deliting all", () => {
        editGallery.titleInput.clear();
        editGallery.descriptionInput.clear();
        editGallery.imageUrlInput.clear();
        editGallery.submitButton.click();
        cy.wait(3000);
      });

})