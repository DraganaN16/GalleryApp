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



 Cypress.Commands.add("loginViaApi",(email, password) => { ///moram dodeliti vrednost email = "draganan@gmail"...inace ce puci

     // let registeredEmail = "draganan@gmail.com"

     cy.request({                  ///ja ti saljem na backennd ovo
         method: "POST",
         url:  "https://gallery-api.vivifyideas.com/api/auth/login",
         body:{
             "email": email,
             "password": password
         }
     }).its("body").then((response) => {  ///ovo uvek moze da bude isto
            //cy.log(response);   backend vraca ovo
            const token  = response.access_token;
            expect(token).to.be.a("string");

           const userId = response.user_id;
            expect(userId).to.be.a("number");

            window.localStorage.setItem("token", token)  //("token", odgovor.access_token) proveriti i opvo, sad je tako napoisao
            window.localStorage.setItem("user_Id", userId)
           
     })
    
    //     function sumTwoNumbers(num1, num2){
    //      return num1+num2
    //    }
    //      sumTwoNumbers(1,5)
   });


// Cypress.Commands.add("registerViaApi",(firstName,lastName, email, pass, passConfirm, acceptTerms = true) => {
//     let unregisterEmail = faker.internet.email();

//     cy.request({
//         method: "POST",
//          url: "https://gallery-api.vivifyideas.com/api/auth/register",
//          body: {
//              "first_name": firstName,
//              "last_name": lastName,
//              "email": email,
//              "password": pass,
//              "password_confirmation": passConfirm,
//              "terms_and_conditions": acceptTerms
//          }

//      }).its('body').then((respopnse) => {
//          cy.log(response);
//            const  token  = response.access_token;
//            expect(token).to.be.a("string");

//            const userId = response.user_id;
//            expect(userId).to.be.a("number");     prvo ovo sve proveravamo pa stavljamo u command, jer ako ovo padne,nista nece proci

//           window.localStorage.setItem("token", token)
//           window.localStorage.setItem("user_Id", userId)
//           console.log(token);
//           console.log(userId);
//      })
// });

Cypress.Commands.add('loginViaApi', (userEmail = 'markoqa13@gmail.com', userPass = 'Marko123') => {
    cy.request({
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        method: 'POST',
        body: {
            email: userEmail,
            password: userPass
        }
    }).its('body').then((odgovor) => {
        expect(odgovor.access_token).to.be.a('string');
        expect(odgovor.token_type).eq('bearer');
        
        window.localStorage.setItem('token', odgovor.access_token)
    })

})

Cypress.Commands.add('registerUserViaApi', (firstName, lastName, email, pass, passConfirm, acceptTerms = true) => {
    cy.request({
        url: 'https://gallery-api.vivifyideas.com/api/auth/register',
        method: 'POST',
        body: {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": pass,
            "password_confirmation": passConfirm,
            "terms_and_conditions": acceptTerms
        }
    }).its('body').then((odgovor) => {

    })
})