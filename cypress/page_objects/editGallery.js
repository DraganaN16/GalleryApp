class EditGallery{

    get titleInput(){
        return cy.get("#title");
    }
    get descriptionInput(){
        return cy.get("#description")
    }
    get imageUrlInput(){
        return cy.get(".input-group > .form-control")
    }
    get submitButton(){
        return cy.get("form > :nth-child(4)")
    }
    get cancelButton(){
        return cy.get("form > :nth-child(5)")
    }
    get allGalleries(){
        return cy.get(":nth-child(1) > .nav-link")
    }
}

export const editGallery = new EditGallery();