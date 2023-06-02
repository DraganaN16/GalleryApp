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

    get imageUrlInput2(){
        return cy.get(":nth-child(3) > .input-group > .form-control")
    }

    get addButton(){
        return cy.get('form > :nth-child(3) > :nth-child(3)');
    }

    get submitButton(){
        return cy.get("form > :nth-child(4)");
    }

    createNewGallery(title, description, imageUrl, imageUrl2){
        this.navLink.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageUrlInput.type(imageUrl);
        this.imageUrlInput2.type(imageUrl2);
        this.addButton.click();
        this.submitButton.click();
    }

}

export const createGalleryPage = new CreateGalleryPage();