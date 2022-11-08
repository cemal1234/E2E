describe('New Payee Test', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('users').then(users =>{
            const username = users.id
            const password = users.pwd

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.get('.btn-primary').click()
        })
    })

    it('should add new payee to the list', () => {

        cy.get('#pay_bills_tab').click()
        cy.url().should('include','bank/pay-bills.html')
        cy.get('a').contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Test Payee')
        cy.get('#np_new_payee_address').type('Payee Address')
        cy.get('#np_new_payee_account').type('Payee Account')
        cy.get('#np_new_payee_details').type('Payee Details')
        cy.get('#add_new_payee').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain','The new payee Test Payee was successfully create')
        
        // OR
        
        // .contains('The new payee Test Payee was successfully create')
        // .should('be.visible')
    })
})