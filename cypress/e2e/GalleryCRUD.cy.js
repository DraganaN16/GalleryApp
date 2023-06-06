/// <reference types='cypress' />

import { galleryCRUD } from '../page_objects/galleryCRUD'

describe('CRUD flow', () => {
    beforeEach(() => {
        //ceo kod ispod smo prebacili u POM kao metodu
        // cy.visit('login');
        // galleryCRUD.emailInputFieldLogin.type('draganan@gmail.com');
        // galleryCRUD.passwordInputFieldLogin.type('pokusavam100');
        // galleryCRUD.submitBtnLoginPage.click()
        // galleryCRUD.loginUser('draganan@gmail.com', 'pokusavam100');

        //jedan nacin koriscenja podataka iz cypress environmenta
        galleryCRUD.loginUserFE(Cypress.env('registeredEmail'), Cypress.env('validPassword'));

        //drugo nacin koriscenja podataka iz cypress environmenta
        // let userEmail = Cypress.env('registeredEmail')
        // let validPassword = Cypress.env('validPassword')
        // galleryCRUD.loginUser(userEmail, validPassword);

        //treci nacin koriscenja podataka iz cypress environmenta
        // const { registeredEmail, validPassword } = Cypress.env();

        // galleryCRUD.loginUser(registeredEmail, validPassword);
    });

    it.only('Create new gallery', () => {
        cy.intercept({
            url: 'https://gallery-api.vivifyideas.com/api/galleries',
            method: 'POST'
        }).as('galleryCreated')

        cy.intercept({
            url: 'https://gallery-api.vivifyideas.com/api/galleries?page=1&term=',
            method: 'GET'
        }).as('allGalleriesPageLoaded')

        // cy.get('a').contains('Create Gallery');
        cy.get('[href="/create"]').click();
        cy.get('#title').type('Moja prva galerija - 2');
        cy.get('#description').type('Opis moje prve galerije');
        cy.get('[type="url"]').type('https://upload.wikimedia.org/wikipedia/commons/4/49/Fz6n2005dnmb.jpg');
        cy.get('button').contains('Submit').click()

        cy.wait('@galleryCreated').then((res) => {

            cy.log('Gall created ' + res);
        })
        // cy.wait('@allGalleriesPageLoaded').then((intercept) => {
        //     cy.log('HomePage loaded' + intercept.response);
        // })


        cy.get('h1').should('have.text', 'All Galleries')
        cy.get(".box-title").first().should('contain', 'Moja prva galerija - 2');
    })

    it('Edit gallery title', () => {
        cy.get(".box-title").eq(2).click();
        cy.get('a').contains('Edit Gallery').click();

        // cy.get('#title').should('have.value', 'Moja prva galerija - 2');
        // cy.get('#description').should('have.value','Opis moje prve galerije');
        // cy.get('[type="url"]').should('have.value','https://upload.wikimedia.org/wikipedia/commons/4/49/Fz6n2005dnmb.jpg');

        cy.get('#title').type(' editovano');
        cy.get('button').contains('Submit').click()

    })

})