describe('Dashboard access', () => {
    before(() => {
        cy.viewport(1480,800)
    });

    it('Given to access', () => {
        cy.visit('/');
    });
})
describe('products research', () => { 
    before(() => {
        cy.viewport(1480,800)
    });
    it('When i go home', () => {
        cy.scrollTo('top');
        
    })
    it('Then visible text', () => {
        cy.wait(300);
        cy.contains('Entre ou cadastre-se');    
    })
    it('And i research tinto wine', () => {
        cy.scrollTo('top');
        cy.getByTestId('header-search-input').eq(0).type('tinto{enter}', {force: true})
        cy.wait(200)  

        cy.wait(300)
    })
    it('Then added product in to my cart', () => {
        cy.contains('Adicionar à easybox').click();
        cy.wait(200)
        cy.get('[title="Seu carrinho de compras"]').first().click();
        cy.contains('A Galet Tinto');
        cy.contains('Seguir para o carrinho').click()  
    })
})
describe('User login', () => {
    before(() => {
        cy.viewport(1480,800)
    });
    it('Given visible text', () => {
        cy.contains('Acesse sua conta');    
    })
    it('When insert e-mail in to field', () => {
        cy.wait(245)
        cy.getByTestId('login-username-field').type('detox296802@test.com');
        // cy.getByTestId('login-username-field').type('detox161586@test.com'); 
    })
    it('And insert password in to field', () => {
        cy.wait(245)
        cy.getByTestId('login-password-field').type('TEST01robot');
        cy.scrollTo('top');
    })
    it('And click button login', () => {
        cy.getByTestId('login-btn').first().click();

    }) 
}) 
describe('Added adress delivery', () => {
    it('Given visible text', () => {

        cy.contains('Endereço de entrega').first().wait(300);
        cy.contains('Adicionar novo endereço').click()
    })
    it('When inform data addres', () => {
        cy.getByTestId('address-form').get('input[name="addressTitle"]').type('TESTE', {force: true});
        cy.getByTestId('address-form').get('input[name="clientName"]').type('Teste User', {force: true});
        cy.getByTestId('address-form').get('input[name="postalCode"]').type('88060256', {force: true});
        cy.getByTestId('address-form').get('input[name="number"]').type('123', {force: true});
        cy.getByTestId('address-form').get('input[name="details"]').type('Teste complemento', {force: true});
        cy.getByTestId('address-form').contains('Complemento').scrollIntoView({ offset: { top: 200} })
        cy.getByTestId('address-form').get('input[name="telephone"]').type('48888888855', {force: true});
        
        cy.get('#isPreferredAddress').wait(4000).click();
        cy.getByTestId('submit-button').click()
        
    })
    // it('Given visible text', () => {
    //     cy.contains('Minha Conta'); 
    //     cy.wait(600)   
    //     cy.getByTestId('menu-item-render').within(() => cy.contains('Minha Conta').click());
    //     cy.contains('Minha Conta').eq(0).click();
    // })
}) 