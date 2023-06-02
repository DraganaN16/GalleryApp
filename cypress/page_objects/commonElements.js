class CommonElements{
    get myGalleriesButton(){
        return cy.get("a").contains("My Galleries");
    }
    get logotBtn(){
        return cy.get("a").contains("Button");
    }
    get errorMessage(){
        return cy.get('p[class="alert alert-danger"]');
    }
    get galleryName(){
        return cy.get("box-title");
    }
    get registerEmail(){
        return cy.get("input[id='email']");
    }
    get galleryName(){
        return cy.get(":nth-child(1) > h2 > .box-title");
    }
    
}



export const commonElements = new CommonElements();