/// <reference types='cypress'/>

before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })


    beforeEach("Login API", () =>{
       cy.request({
        method: "POST",
        url:  "https://gallery-api.vivifyideas.com/api/auth/login",
        body:{
            "email":"draganan@gmail.com",
            "password":"pokusavam100"
        }
       }).its("body").then((response) => {
           //cy.log(response);
           const token  = response.access_token;
           expect(token).to.be.a("string");

           const userId = response.user_id;
           expect(userId).to.be.a("number");

           window.localStorage.setItem("token", token)
           window.localStorage.setItem("user_Id", userId)
           console.log(token);
           console.log(userId);
       })
        
    });

    it("Login API", () =>{
        cy.visit("");
        cy.wait(3000);
    })
