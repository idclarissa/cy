describe('Dashboard access', () => {
    before(() => {
        cy.viewport(1480,800)
    });

    it('Given to access', () => {
        cy.visit('/');
    });
    it('When click in to entrar', () => {
        cy.wait(500)    
        cy.get('a:visible[title="Entre ou cadastre-se"]').first().click();
    });
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
        cy.wait(750)
    }) 
    it('Then visible text', () => {
        cy.wait(245)
        cy.contains('Assim que você realizar compras na Vinho Fácil, poderá ver seu pedido aqui.');    
    })
    it('Given visible text', () => {
        cy.contains('Minha Conta'); 
        cy.wait(600)   
        cy.getByTestId('menu-item-render').within(() => cy.contains('Minha Conta').click());
        cy.contains('Minha Conta').eq(0).wait(50000).click();
    })
}) 

describe('products research', () => { 
    before(() => {
        cy.viewport(1280,800)
    });
    it('When i go home', () => {
        cy.scrollTo('top');
        cy.contains('Minha Conta').eq(0).click();
    })
    it('Then visible text', () => {
        cy.wait(300);
        cy.contains('Olá, Clarissa test cy');    
    })
    it('And i research white wine', () => {
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