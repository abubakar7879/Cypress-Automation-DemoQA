beforeEach(() => {
  cy.viewport(2128, 1034);
  cy.on('uncaught:exception', (err, runnable) => {
    console.log('Uncaught Exception:', err);
    return false;
  });
});

describe('Task 1: Form Submission Test', () => {
  it('Submits a form with provided details', () => {
    cy.visit('https://demoqa.com/');
    cy.get('header > a > img[src="/images/Toolsqa.jpg"]').should('have.attr', 'src', '/images/Toolsqa.jpg');
    cy.get('.category-cards .card').contains('h5', 'Forms').click();
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
    cy.get('.modal-content .table tbody').within(() => {
      const expectedValues = ['Cowlar Developer', 'qaengineer@cowlar.com', 'Male', '0123456789', '05 December,2023', 'Computer Science', 'Music','', 'Address 1', 'NCR Delhi'];
      expectedValues.forEach((value, index) => {
        cy.get(`:nth-child(${index + 1}) > :nth-child(2)`).should('have.text', value);
      });
    });
  });
});