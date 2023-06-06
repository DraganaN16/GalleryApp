class galleryCRUD {

    get emailInputFieldLogin() {
        return cy.get('#email')
    }
    get passwordInputFieldLogin() {
        return cy.get('#password')
    }
    get submitBtnLoginPage() {
        return cy.get('[type="submit"]')
    }

    loginUser(email, password) {
        cy.visit('login');
        this.emailInputFieldLogin.type(email);
        this.passwordInputFieldLogin.type(password);
        this.submitBtnLoginPage.click()
    }

}

export const galleryCRUD = new GalleryCRUD()