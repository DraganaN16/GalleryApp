/// <reference types='cypress'/>

import {commonElements} from "../../page_objects/commonElements"

//import { method } from "cypress/types/bluebird"

import { faker } from "@faker-js/faker"

import { registerPage } from "../../page_objects/registerPage"



describe('Register Via API', () => {

    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })


    beforeEach("Register API", () => {


        let unregisterEmail = faker.internet.email();

        cy.request({
            method: "POST",
             url: "https://gallery-api.vivifyideas.com/api/auth/register",
             body: {
                 "first_name": "Pera",
                 "last_name": "Pericev",
                 "email": unregisterEmail,
                 "password": "pokusavam100",
                 "password_confirmation": "pokusavam100",
                 "terms_and_conditions": true
             }

         }).its('body').then((response) => {
             cy.log(response);
               const  token  = response.access_token;
               expect(token).to.be.a("string");

               const userId = response.user_id;
               expect(userId).to.be.a("number");

              window.localStorage.setItem("token", token)
              window.localStorage.setItem("user_Id", userId)
              console.log(token);
              console.log(userId);
         })

     });

    it("Register API, intercept", () => {
         cy.intercept({
             method:"POST",
             url:"https://gallery-api.vivifyideas.com/api/auth/register"
         }).as("successfullRegister");
         cy.visit("/register");
         registerPage.registerNewUser//
         cy.wait("@successfullRegister").then((res) =>{
             expect(res.response.statusCode).eq(200);
         })
        
     })

     it.only("Last name - char", () => {
        const { validFirstName, validLastName, registeredEmail, validPassword } = Cypress.env()  //3.naziv mora biti isti kao i u configu, voditi racuna
        const unregisterEmail = faker.internet.email();
        cy.registerViaApi(Cypress.env("validFirstName"), "@@", unregisterEmail, Cypress.env("validPassword"), Cypress.env("validPassword"))
        cy.visit("");
        cy.wait(1500);
       

     })

})