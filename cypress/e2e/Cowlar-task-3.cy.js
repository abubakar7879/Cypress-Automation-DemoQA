beforeEach(() => {
    cy.viewport(2128, 1034);
    cy.on('uncaught:exception', (err, runnable) => {
        console.log('Uncaught Exception:', err);
        return false;
    });
});

describe('Book Store API Test', () => {
    it('Book Store Navigation Test', () => {
      cy.visit('https://demoqa.com/');
      cy.get('#app > header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg');
      cy.get('#app > div > div > div.home-body > div > div:nth-child(6)').click();
      cy.get('#app > div > div > div.pattern-backgound.playgound-header > div').should('have.text', 'Book Store');
      cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click();
      cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('bookDetails')
      cy.contains('Understanding ECMAScript 6').click();
      cy.wait('@bookDetails').its('response.body').should('deep.equal', {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subTitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        publish_date: "2016-09-03T00:00:00.000Z",
        publisher: "No Starch Press",
        pages: 352,
        description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
        website: "https://leanpub.com/understandinges6/read"
      });
      cy.get('#title-wrapper > .col-md-9').should('have.text', 'Understanding ECMAScript 6');
    })
  });