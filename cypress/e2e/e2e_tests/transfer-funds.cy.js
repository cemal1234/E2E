describe('Transfer Funds Tests', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('users').then(users => { 
            const username = users.id
            const password = users.pwd
    
            cy.login(username,password)
        })
    })

    it('should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('5')
        cy.get('#tf_toAccountId').select('6')
        cy.get('#tf_amount').type('19')
        cy.get('#tf_description').type('Transfer Desc')
        cy.get('#btn_submit').click()
    })

    it('should verift correct data', ()=>{
        cy.get('#tf_fromAccountId').should('have.value', 'Credit Card')
        cy.get('#tf_toAccountId').should('have.value', 'Brokerage')
        cy.get('#tf_amount').should('have.value', '19')
        cy.get('#tf_description').should('have.value','Transfer Desc')
    })
})