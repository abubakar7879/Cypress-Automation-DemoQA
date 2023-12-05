beforeEach(() => {
    cy.viewport(2128, 1034);
    cy.on('uncaught:exception', (err, runnable) => {
        console.log('Uncaught Exception:', err);
        return false;
    });
});
describe('Interactions Page Test', () => {
    it('Verification For Interaction Page', () => {
        cy.visit('https://demoqa.com/');
        cy.get('#app > header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg');
        cy.get('#app > div > div > div.home-body > div > div:nth-child(5)').click();
        cy.get('#app > div > div > div.pattern-backgound.playgound-header > div').should('have.text', 'Interactions');
        cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(1)').should('contain', 'Elements');
        cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(2)').should('contain', 'Forms');
        cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(3)').should('contain', 'Alerts, Frame & Windows');
        cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(4)').should('contain', 'Widgets');
        cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(5)').should('contain', 'Interactions');
        cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(6)').should('contain', 'Book Store Application');
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click();
        cy.get('#app > div > div > div.pattern-backgound.playgound-header > div').should('have.text', 'Resizable');
        cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '200px');
        cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '200px');
        cy.get('#resizableBoxWithRestriction > span')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 20000, clientY: 1000 })
            .trigger('mouseup');
        cy.get('#resizableBoxWithRestriction').invoke('outerWidth').should('equal', 500);
        cy.get('#resizableBoxWithRestriction').invoke('outerHeight').should('equal', 300);
        cy.get('#resizableBoxWithRestriction > span')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 50, clientY: 50 })
        .trigger('mouseup');
        cy.get('#resizable').should('have.css', 'height', '200px');
        cy.get('#resizable').should('have.css', 'width', '200px');
        cy.get('#resizable > span')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 500, clientY: 500 })
            .trigger('mouseup');
        cy.get('#resizable').invoke('outerWidth').should('be.lessThan', 200);
        cy.get('#resizable').invoke('outerHeight').should('be.lessThan', 200);
    })
});