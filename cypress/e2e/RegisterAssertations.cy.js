// <reference types='cypress'/>
 
import {faker} from "@faker-js/faker"

import { registerPage } from "../page_objects/registerPage"

import { commonElements } from "../page_objects/commonElements"

let user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }

before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

  beforeEach(() => {
    cy.visit("register");
  })
  afterEach(() =>{
    cy.wait(3000);
  })

  describe("Register page - PO", () => {
    it("Registration with valid credentials", () => {
      registerPage.registerNewUser("Pera", "Peric", "draganan55@gmail.com", "pokusavam100", "pokusavam100")
    });

    it("Spaces befor first and last name", () => {
        registerPage.registerNewUser("  Pera", "   Peric", user.email, user.password, user.password);
       
      });
    
      it("Register with minimum characters in the first name", () => {
        registerPage.registerNewUser("X", user.lastName, user.email, user.password, user.password);
      });
  
      it("Register with maximum characters in the first name", () => {
  
        var d = "";
        for(let i=0; i<255;i++){
          d+= 'd';
        }
  
        registerPage.registerNewUser(d, user.lastName, user.email, user.password, user.password);
    
      });
    
    
      it("First name - numbers", () => {
        registerPage.registerNewUser("111", user.firstName, user.email, user.password, user.password );
        
        
      });
    
    
      it("Last name - char", () => {
        registerPage.registerNewUser(user.firstName, "@@@", user.email, user.password, user.password);
        
      });
    
    
    
      it("Register with unicode characters in first name", () => {
        registerPage.registerNewUser("Драгана", user.lastName, user.email, user.password, user.password);
        
      });
    
    
      it("Password with space", () => {
        registerPage.registerNewUser(user.firstName, user.lastName, user.email, "pokusavam 100", "pokusavam 100");
        
      });
    
    
      it("Password with 8 characters- all numbers", () => {
        registerPage.registerNewUser(user.firstName, user.lastName, user.email, "10000000", "10000000");
        
      })
    });
    
    
    
    describe("Register page - NEG", () => {
    
      it("First name- empty field", () => {
        registerPage.registerNewUser("{backspace}", user.lastName, user.email, user.password, user.password)
        
      });
    
    
      it("All empty field", () => {
        registerPage.registerNewUser("{backspace}", "{backspace}", "{backspace}", "{backspace}", "{backspace}");
        
      });
    
      it("Register with spaces in first and last name", () => {
        registerPage.registerNewUser("{backspace}", "{backspace}",  user.email, user.password, user.password)
        // registerPage.lastNameInputField.type(" ");
        
      });
    
      it("Empty passwords field", () => {
        registerPage.registerNewUser(user.firstName, user.lastName, user.email, "{backspace}", "{backspace}");
        
      });
    
    
    //   it("Confirmed password- wrong", () => {
    //     registerPage.registerNewUser(user.firstName, user.lastName, user.email, "pokusavam100", faker.internet.password());
       
    //   });
    
      it("Password with 8 characters- all letters", () => {
        registerPage.registerNewUser(user.firstName, user.lastName, user.email, "llllllll", "llllllll");
        
      });
    
    
    
      it("Email without @, invalid format", () => {
        registerPage.registerNewUser(user.firstName, user.lastName, "draganaagmail.com", user.password, user.password );
        
      });
    
    
    //    it.only("Accepted terms and conditions isn't checked", () => {
    //      registerPage.registerNewUser(user.firstName, user.lastName, user.email, user.password, user.password);
    //      registerPage.acceptedTerms.uncheck();
    //      registerPage.submitButton.click();
    //    })
    
    });