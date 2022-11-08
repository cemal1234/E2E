describe('Currency-Exchange Tests', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('users').then(users => { 
            const username = users.id
            const password = users.pwd
    
            cy.login(username,password)
        })
    })

    it('should fill conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('CNY')
        cy.get('#pc_amount').type('1000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('should show success message', ()=>{
        cy.get('#pc_conversion_amount')
        .should('contain','5757.05 yuan (CNY) = 1000.00 U.S. dollar (USD)')
    })
})