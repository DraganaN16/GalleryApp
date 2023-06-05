// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// ///Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



 Cypress.Commands.add("loginViaApi",(email, password) => {

     // let registeredEmail = "draganan@gmail.com"

     cy.request({
         method: "POST",
         url:  "https://gallery-api.vivifyideas.com/api/auth/login",
         body:{
             "email": email,
             "password": password
         }
     }).its("body").then((response) => {  ///ovo uvek moze da bude isto
            //cy.log(response);
            const token  = response.access_token;
            expect(token).to.be.a("string");

           const userId = response.user_id;
            expect(userId).to.be.a("number");

            window.localStorage.setItem("token", token)
            window.localStorage.setItem("user_Id", userId)
           
     })
    
    //     function sumTwoNumbers(num1, num2){
    //      return num1+num2
    //    }
    //      sumTwoNumbers(1,5)
   });


// Cypress.Commands.add("registerViaApi",(first_name,last_name, email, password, password_confirmation) => {
//     let unregisterEmail = faker.internet.email();

//     cy.request({
//         method: "POST",
//          url: "https://gallery-api.vivifyideas.com/api/auth/register",
//          body: {
//              "first_name": "Pera",
//              "last_name": "Pericev",
//              "email": unregisterEmail,
//              "password": "pokusavam100",
//              "password_confirmation": "pokusavam100",
//              "terms_and_conditions": true
//          }

//      }).its('body').then((response) => {
//          cy.log(response);
//            const  token  = response.access_token;
//            expect(token).to.be.a("string");

//            const userId = response.user_id;
//            expect(userId).to.be.a("number");

//           window.localStorage.setItem("token", token)
//           window.localStorage.setItem("user_Id", userId)
//           console.log(token);
//           console.log(userId);
//      })
// });