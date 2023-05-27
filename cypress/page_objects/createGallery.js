class CreateGalleryPage {

    get navLink(){
        return cy.get(".mr-auto > :nth-child(3) > .nav-link");
    }

    get titleInput(){
        return cy.get("#title");
    }

    get descriptionInput(){
        return cy.get("#description");
    }

    get imageUrlInput(){
        return cy.get(".input-group > .form-control");
    }

    get addButton(){
        return cy.get('form > :nth-child(3) > :nth-child(3)');
    }

    get submitButton(){
        return cy.get("form > :nth-child(4)");
    }

}

export const createGalleryPage = new CreateGalleryPage();