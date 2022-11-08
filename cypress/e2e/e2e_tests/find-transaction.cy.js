describe('Find Transactions Tests', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('users').then(users => { 
            const username = users.id
            const password = users.pwd
    
            cy.login(username,password)
        })
    })

    it('should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('1000')
        cy.get('#aa_toAmount').type('2000')
        cy.get('button[type="submit"]').click().wait(3000)

    })

    it('should display results',()=>{
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt',0)

    })
})    