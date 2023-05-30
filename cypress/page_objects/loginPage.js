class LoginPage{
    get emailInputField(){
        return cy.get("#email");
    }

    get passwordInputField(){
        return cy.get("#password");
    }

    get submitButton(){
        return cy.get("button[type='submit']");
    }

}

export const loginPage = new LoginPage();