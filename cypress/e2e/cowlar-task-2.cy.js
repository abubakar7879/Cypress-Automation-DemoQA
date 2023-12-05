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
        cy.get('header > a > img[src="/images/Toolsqa.jpg"]').should('have.attr', 'src', '/images/Toolsqa.jpg');
        cy.get('.category-cards .card').contains('h5', 'Interactions').click();
        cy.get('.playgound-header .main-header').should('have.text', 'Interactions');
        cy.get('.left-pannel .accordion .element-group').each(($it, index) => {
            const expectedTexts = [
                'Elements',
                'Forms',
                'Alerts, Frame & Windows',
                'Widgets',
                'Interactions',
                'Book Store Application'
            ];
            expect($it).to.contain(expectedTexts[index]);
        });
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click();
        cy.get('.playgound-header .main-header').should('have.text', 'Resizable');
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