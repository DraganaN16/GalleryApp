class CommonElements{
    get myGalleriesButton(){
        return cy.get("a").contains("My Galleries");
    }
    get logotBtn(){
        return cy.get("a").contains("Button");
    }
    get galleryName(){
        return cy.get("box-title");
    }
    get registerEmail(){
        return cy.get(".alert");
    }
    get acceptedTerms(){
        return cy.get(":nth-child(6) > .alert")
    }
}



export const commonElements = new CommonElements();