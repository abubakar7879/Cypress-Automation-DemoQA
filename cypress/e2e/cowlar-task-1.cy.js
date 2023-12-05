beforeEach(() => {
  cy.viewport(2128,1034);
  cy.on('uncaught:exception', (err, runnable) => {
    console.log('Uncaught Exception:', err);
    return false;
  });
});

describe('Task 1: Form Submission Test', () => {
  it('Submits a form with provided details', () => {
    cy.visit('https://demoqa.com/');
    cy.get('#app > header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg');
    cy.get('#app > div > div > div.home-body > div > div:nth-child(2)').click();
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('#firstName').clear().type('Cowlar');
    cy.get('#lastName').clear().type('Developer');
    cy.get('#userEmail').clear().type('qaengineer@cowlar.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').clear().type('0123456789');
    cy.get('#subjectsInput').type('Computer Science{enter}');
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('#currentAddress').clear().type('Address 1');
    cy.get('#state').click().find('div[id^="react-select-"]').contains('NCR').click();
    cy.get('#city').click().find('div[id^="react-select-"]').contains('Delhi').click();
    cy.get('#submit').click();
  });
  it('Validates the form submission', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Cowlar Developer');
      cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'qaengineer@cowlar.com');
      cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', 'Male');
      cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', '0123456789');
      cy.get('tbody > :nth-child(5) > :nth-child(2)').should('have.text', '05 December,2023');
      cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text', 'Computer Science');
      cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text', 'Music');
      cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text', 'Address 1');
      cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', 'NCR Delhi');
      cy.get('#closeLargeModal').click();
  });
});