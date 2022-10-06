const { emailGenerator } = require('../support/helpers/emailGenerator.js');
const { cpf } = require('../support/helpers/cpf.js');

describe('Scenary access in to register', () => {
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
  it('And insert e-mail in to field', () => {
    cy.wait(245)
    cy.getByTestId('username-field').type(emailGenerator())
  })
  it('And click bt submit', () => {
    cy.getByTestId('signup-button').click();
  })
  it('Then visible text', () => {
    cy.contains('Conclua seu cadastro');
  })
})
  describe('Scenary register user', () => {
    before(() => {
      cy.viewport(1280,800)
    });
  
  it('Given i insert data personal', () => {
    cy.getByTestId('first-name-field').type('Clarissa test cy');
    cy.getByTestId('last-name-field').type('Test cy');
    cy.getByTestId('birthday-field').type('10/01/1997');
    cy.getByTestId('cpf-field').type(cpf())
    cy.getByTestId('phoneNumber-field').type(48999234356)
    cy.wait(500)  
  })

  it('When check buttons', () => {
    cy.wait(500)
    cy.getByTestId('gender-select-box').contains('Feminino').click() 
    cy.getByTestId('password-field').type('TEST01robot');
    cy.getByTestId('is-notifiable-checkbox').click()
  })

  it('Then finalized create account', () => {
    cy.getByTestId('register-user-button').click()
  })

  it('Then visible text', () => {
    cy.wait(6000)
    cy.contains('Cadastro realizado com sucesso! Acesse sua conta.');
  })
})

