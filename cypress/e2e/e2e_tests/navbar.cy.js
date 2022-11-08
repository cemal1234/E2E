describe('Navbar test', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should display online banking content', () =>{
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    })

})    