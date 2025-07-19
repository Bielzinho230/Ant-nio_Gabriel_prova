describe('Nosso primeiro teste automatizado', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('validação de user block', () => {
        cy.User_valid('locked_out_user', 'secret_sauce')
        cy.get('h3').contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    })

    it('validação de user fora do banco de dados / sem cadastro', () => {
        cy.User_valid('Gabsteste', '123')
        cy.get('h3').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })


    it('validação de user ativo sem complicações', () => {
        cy.User_valid('standard_user', 'secret_sauce')
        cy.get('.app_logo').contains('Swag Labs').should('be.visible')
    })


    it('Validando carrinho de compras entrada e saida', () => {
        cy.User_valid('standard_user', 'secret_sauce')
        cy.get('.app_logo').contains('Swag Labs').should('be.visible')
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#remove-sauce-labs-bike-light').click()

    })
})