describe('Payment Test', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('users').then(users => { 
            const username = users.id
            const password = users.pwd
    
            cy.login(username,password)
        })

    })

    it('should send new payment (fake)', ()=>{
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('Loan')
        cy.get('#sp_amount').type('5')
        cy.get('#sp_date').type('2022-07-20 {enter}')
        cy.get('#sp_description').type('pay test')
        cy.get('#pay_saved_payees').click()
    })

    it('should show success message', ()=>{
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain','The payment was successfully submitted.')
    })
})