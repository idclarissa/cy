describe('Scenary validations login', () => {
    before(() => {
        cy.viewport(1280,800)
    });

    it('Given to access', () => {
        cy.visit('/');
    });
    it('When click in to entrar', () => {
        cy.wait(500)    
        cy.get('a:visible[title="Entre ou cadastre-se"]').first().click();
    });
})

describe('Scenary Incorrect login', () => {
    before(() => {
        cy.viewport(1280,800)
    });
    it('Given visible text', () => {
        cy.contains('Acesse sua conta');    
    })
    it('When insert e-mail in to field', () => {
        cy.wait(245)
        cy.getByTestId('login-username-field').type('testcy01@wine.com');
    })
    it('And insert password in to field', () => {
        cy.wait(245)
        cy.getByTestId('login-password-field').type('TEST01robot');
        cy.scrollTo('top');
    })
    it('And click button login', () => {
        cy.getByTestId('login-btn').first().click();
        cy.scrollTo('top');
    }) 
    it('Then check error message', () => {
        cy.scrollTo('top');
        cy.contains('Não encontramos uma conta ativa para o usuário/senha digitados.');    
    })
})
describe('Scenary incorrect login, no access data', () => {
    before(() => {
        cy.viewport(1280,800)
    });
    it('Given visible text', () => {
        cy.contains('Acesse sua conta');    
    })
    it('When check error message without no password', () => {
        cy.scrollTo('top');
        cy.getByTestId('login-password-field').clear();
        cy.contains('Não encontramos uma conta ativa para o usuário/senha digitados.');    
        cy.contains('Campo obrigatório');    
    })
    it('Then check error message without no user', () => {
        cy.getByTestId('login-password-field').type('TEST01robot');
        cy.getByTestId('login-username-field').clear();
        cy.scrollTo('top');
        cy.contains('Não encontramos uma conta ativa para o usuário/senha digitados.');    
        cy.contains('Campo obrigatório'); 
    })
})
describe('Scenary correct login', () => {
    before(() => {
        cy.viewport(1280,800)
    });
    it('Given text visible', () => {
        cy.contains('Acesse sua conta');    
    })
    it('When insert e-mail in to field', () => {
        cy.wait(245)
        cy.getByTestId('login-username-field').type('detox139107@test.com');
    })
    it('And insert password in to field', () => {
        cy.wait(245)
        cy.getByTestId('login-password-field').clear().type('TEST01robot');
        cy.scrollTo('top');
    })
    it('And click button login', () => {
        cy.getByTestId('login-btn').first().click();
        cy.scrollTo('top');
    })
    it('Then visible text', () => {
        cy.contains('Assim que você realizar compras na Vinho Fácil, poderá ver seu pedido aqui.');    
    })
})
   