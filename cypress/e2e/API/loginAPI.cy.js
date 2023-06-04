/// <reference types='cypress'/>

import {faker} from "@faker-js/faker"

///import { method } from "cypress/types/bluebird"?

import { loginPage } from "../page_objects/loginPage"

//import {loginViaApi} from ""

const registeredEmail = "draganan@gmail.com"

describe("Login Via API", () => {

   before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    })


    beforeEach(() =>{
      //cy.loginViaApi();
    
    //    cy.request({
    //     method: "POST",
    //     url:  "https://gallery-api.vivifyideas.com/api/auth/login",
    //     body:{
    //         "email":"draganan@gmail.com",
    //         "password":"pokusavam100"
    //     }
    //    }).its("body").then((response) => {
    //        //cy.log(response);
    //        const token  = response.access_token;
    //        expect(token).to.be.a("string");

    //        const userId = response.user_id;
    //        expect(userId).to.be.a("number");

    //        window.localStorage.setItem("token", token)
    //        window.localStorage.setItem("user_Id", userId)
    //        console.log(token);
    //        console.log(userId);
    //    })
        
    });

    it("Login API-negative case, invalid pass", () =>{

//1.jedan nacin za dobavljanje v rednosti iz environmenta
        //const randomPassword = faker.internet.password();

       const mozemoNazvatiKakoZelimo = Cypress.env("registeredREmail");
       const istoTako = Cypress.env("validPassword")

//2.drugi nacin za dobavljanje v rednosti iz environmenta

      const { registeredEmail, validPassword } = Cypress.env()  //3.naziv mora biti isti kao i u configu, voditi racuna
       

        cy.loginViaApi( mozemoNazvatiKakoZelimo, istoTako)
        cy.visit("");
        cy.wait(1500);
        cy.url().should("not.contain", "login")
        //cy.wait(3000);
    })

    it("Login API-negative case, invalid email", () =>{
        cy.loginViaApi("draganan@gmail.com", "pokusavam100")///svaki put radimo ovo, ali prosledjujemo druge vfrednosti, zavisi sta radimo
        cy.visit("");
        cy.wait(1500);
        cy.url().should("not.contain", "login")
        //cy.wait(3000);
    })

    it("Login API-negative case, intercept", () =>{
        cy.intercept({
            method:"POST",
            url: "https://gallery-api.vivifyideas.com/api/auth/login"
        }).as("successfullLogin");
            

        cy.visit("/login");
        loginPage.loginUser(Cypress.env("registeredEmail"), Cypress.env("validPassword"))
       
        //cy.wait(1500);
        //cy.url().should("not.contain", "login")
        //cy.wait(3000);
       
        cy.wait("@successfullLogin").then((res) => {
            console.log(res.response);
            let token = res.response.body.access_token;
            expect(token).to.be.a("string");
            expect(res.response.statusCode).eq(200);

            window.localStorage.setItem("token", token)
        })
    })

});