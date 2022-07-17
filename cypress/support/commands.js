// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('auth', () => {
    cy.session('Assesment',()=>{
        cy.request({
                method: 'POST',
                url: 'https://dev-api.profesi.io/c/auth/login',
                header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: {
                    "email":"recruitmentqaprofesi@yopmail.com",
                    "password":"Qapr0fes1",
                    "remember_me":false
                }
            }).then((response) => {
                Cypress.env('token', response.body.data.token)
                window.localStorage.setItem('auth_pfsi_cmpy._token.local', 'bearer '+ Cypress.env('token'));
            });
        })
    })