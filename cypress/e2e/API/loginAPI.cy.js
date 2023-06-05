/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"

//import { method } from "cypress/types/bluebird"

import { loginPage } from "../../page_objects/loginPage"


const registeredEmail = "draganan@gmail.com"
//const validPassword: "pokusavam100"

describe("Login Via API", () => {

   before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    })


    beforeEach(() =>{
        cy.visit("");
    });

    it("Login API-negative case, invalid pass", () =>{

       //const randomPassword = faker.internet.password();  1.jedan nacin za dobavljanje v rednosti iz environmenta

       const mozemoNazvatiKakoZelimo = Cypress.env("registeredREmail"); //2.drugi nacin za dobavljanje v rednosti iz environmenta
       const istoTako = Cypress.env("validPassword")

       const { registeredEmail, validPassword } = Cypress.env()  //3.naziv mora biti isti kao i u configu, voditi racuna
       //fali da pozovem fju

        cy.loginViaApi( mozemoNazvatiKakoZelimo, istoTako)  ///hocu preko backenda login
        cy.visit("");
        cy.wait(1500);
        cy.url().should("not.contain", "login")
        //cy.wait(3000);
    })

    it("Login API, invalid email", () =>{
        cy.loginViaApi("draganan@gmail.com", "pokusavam100")///svaki put radimo ovo, ali prosledjujemo druge vfrednosti, zavisi sta radimo
        cy.visit("");
        cy.wait(1500);
        cy.url().should("not.contain", "login")
        //cy.wait(3000);
    })


    it("Login API, intercept", () =>{
        cy.intercept({
            method:"POST",
            url: "https://gallery-api.vivifyideas.com/api/auth/login"
        }).as("successfullLogin");            
        cy.visit("/login");
        loginPage.loginUser(Cypress.env("registeredEmail"), Cypress.env("validPassword"))       
        cy.wait("@successfullLogin").then((res) => {  //

            console.log(res.response);
            let token = res.response.body.access_token;

            expect(token).to.be.a("string");
            expect(res.response.statusCode).eq(200);  //

            window.localStorage.setItem("token", token)
        })
    })

});