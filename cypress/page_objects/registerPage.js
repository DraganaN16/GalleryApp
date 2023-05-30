class RegisterPage{
    get firstNameInputField(){
        return cy.get("#first-name");
    }
    get lastNameInputField(){
        return cy.get("#last-name");
    }
    get emailInputField(){
        return cy.get("#email");
    }
    get passwordInputField(){
        return cy.get("#password");
    }
    get passwordConfirmationInputField(){
        return cy.get("#password-confirmation");
    }
    get checkbox(){
        return cy.get("[type='checkbox']");
    }
    get submitButton(){
        return cy.get("[class='btn btn-custom']")
    }

}

export const registerPage = new RegisterPage();