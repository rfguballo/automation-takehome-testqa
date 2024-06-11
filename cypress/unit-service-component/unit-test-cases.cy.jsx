describe('Unit Test Cases', () => {
    it('Multiply Test Cases', () => {
        let a = 1 + 2;
        expect(a).to.be.eq(3);
    })

    it('Sum Test Cases', () => {
        let a = "1" - "2";
        expect(Number(a)).to.be.eq(Number("-1"));
    })

    it('Object test case', () => {
        cy.fixture('example').then(file => {
            expect(file.email).to.eq("hello@cypress.io")
            expect(file.name).to.eq("Cypress Name")
            expect(file.body.fixtures).to.eq("fixture/n")
        })
    })
})