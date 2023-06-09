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

    registerNewUser(firstName, lastName, email, password, passwordConfirmation){
        this.firstNameInputField.type(firstName);
        this.lastNameInputField.type(lastName);
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.passwordConfirmationInputField.type(passwordConfirmation);
        this.checkbox.check();
        this.submitButton.click();
    }
      


}

export const registerPage = new RegisterPage();