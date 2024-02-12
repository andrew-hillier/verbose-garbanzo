/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Home', () => {
    cy.visit('/');

    cy.contains('Hello World!');

    // cy.contains('type').click();

    // cy.url().should('include', '/commands/actions');

    // cy.get('.action-email').type('fake@email.com');

    // cy.get('.action-email').should('have.value', 'fake@email.com');
  });
});

describe('My First Test', () => {
  it('Hello React', () => {
    cy.visit('/helloreact');

    cy.contains('Edit src/HelloReact.tsx and save to reload.');

    cy.contains('Learn React');

    // cy.contains('type').click();

    // cy.url().should('include', '/commands/actions');

    // cy.get('.action-email').type('fake@email.com');

    // cy.get('.action-email').should('have.value', 'fake@email.com');
  });
});

describe('My First Test', () => {
  it('App', () => {
    cy.visit('/app');

    cy.contains('Pokemon');

    cy.get(`[data-cy="launch-demo-modal-button"]`).click();

    cy.get(`[data-cy="demo-modal-title"]`)
      .should('have.text', 'Modal title');

    cy.get(`[data-cy="demo-modal-close-button"]`)
      .should('have.text', 'Close');

    cy.get(`[data-cy="demo-modal-submit-button"]`)
      .should('have.text', 'Save changes');
  });
});