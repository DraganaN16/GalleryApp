/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"



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
    it.only("Edit gallery 'Flower'", () => {
      cy.get("#title").clear().type("Summer");
      cy.get("#description").clear().type("icecream");
      cy.get(".input-group > .form-control").clear().type("https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408")
      cy.get("form > :nth-child(4)").click();
      cy.wait(3000);
    });
})
