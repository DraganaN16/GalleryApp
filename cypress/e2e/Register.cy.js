/// <reference types='cypress'/>

describe("Register page - PO", () => {
  it("Registration with valid credentials", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });

  it("Spaces befor first and last name", () => {
    cy.visit("register");
    cy.get("#first-name").type("   Pera");
    cy.get("#last-name").type("   Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });

  it("Register with minimum characters in the first name", () => {
    cy.visit("register");
    cy.get("#first-name").type("X");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("First name - numbers", () => {
    cy.visit("register");
    cy.get("#first-name").type("111");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("Last name - char", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("@@@");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });



  it("Register with unicode characters in first name", () => {
    cy.visit("register");
    cy.get("#first-name").type("Драгана");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("Password with space", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam 100");
    cy.get("#password-confirmation").type("pokusavam 100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("Password with 8 characters- all numbers", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("10000000");
    cy.get("#password-confirmation").type("10000000");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  })
});



describe("Register page - NEG", () => {
  it("First name- empty field", () => {
    cy.visit("register");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("Last name - empty field", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });

  it("All empty field", () => {
    cy.visit("register");
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });

  it("Register with spaces in first and last name", () => {
    cy.visit("register");
    cy.get("#first-name").type(" ");
    cy.get("#last-name").type(" ");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });

  it("Empty passwords field", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("Confirmed password- wrong", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("talala");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });

  it("Password with 8 characters- all letters", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("llllllll");
    cy.get("#password-confirmation").type("llllllll");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });



  it("Email without @, invalid format", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaagmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").click();
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  });


  it("Accepted terms and conditions isn't checked", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  })

});