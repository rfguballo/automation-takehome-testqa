describe('template spec', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.dropdown-menu > li').as('dropdownItem')
    })

    it('Navigation Validation', () => {
        cy.get('.dropdown-toggle').as('dropdown').click();
        cy.get('@dropdownItem').contains('Traversal').click();
        cy.isVisible('h1');
        cy.contains('h1', 'Traversal');

        cy.get('@dropdown').click();
        cy.get('@dropdownItem').contains('Window').click();
        cy.isVisible('h1');
        cy.contains('h1', 'Window');

        cy.get('@dropdown').click();
        cy.get('@dropdownItem').contains('Aliasing').click();
        cy.isVisible('h1');
        cy.contains('h1', 'Aliasing');
    })

    it('Get Link to window', () => {
        cy.get('a').contains('wrap').click();
        cy.get('h1').should('contain', 'Misc');
        cy.scrollTo('bottom');
        cy.get('a').should('contain', 'cy.wrap()');
    })
})
