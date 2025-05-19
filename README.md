# 🛒 **Fluxo de Checkout Automatizado**

---

## ✨ Funcionalidades

Este projeto contém testes automatizados de ponta a ponta (E2E) utilizando o Cypress para validar o fluxo de checkout de uma aplicação web.

### 📁 #Estrutura do Projeto
```
cy/
├── cypress/
│   ├── e2e/
│   │   └── checkout.cy.js
│   ├── fixtures/
│   │   └── user.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
└── package.json
```
e2e/: Contém os testes E2E, incluindo o fluxo de checkout.

fixtures/: Arquivos JSON com dados simulados para os testes.

support/: Comandos personalizados e configurações globais.

cypress.config.js: Configurações do Cypress.

package.json: Dependências e scripts do projeto.

## 🚀 Instalação

Clone o repositório:

```
git clone https://github.com/idclarissa/cy.git
cd cy
```
Instale as dependências:

```
npm install
```

## 🧪 Executando os Testes
Modo Interativo (GUI)
Para abrir o Cypress em modo interativo:

```
npx cypress open

```
Para executar todos os testes em modo headless:

```
npx cypress run
```

## 🧾 Fluxo de Checkout Testado

O teste checkout.cy.js cobre o seguinte fluxo:

1 - Acessar a página inicial.

2 - Fazer login com credenciais válidas.

3 - Adicionar produtos ao carrinho.

4 - Prosseguir para o checkout.

5 - Preencher as informações de pagamento.

6 - Confirmar a compra.

7 - Verificar a mensagem de sucesso.

## ✅ Boas Práticas Adotadas
Uso de Fixtures: Dados de teste são armazenados em arquivos JSON para facilitar a manutenção.

Comandos Personalizados: Ações repetitivas, como login, são abstraídas em comandos personalizados.

Seletores Estáveis: Utilização de atributos data-cy para selecionar elementos, tornando os testes mais robustos.

Isolamento de Testes: Cada teste é independente, garantindo que falhas não afetem outros testes.

## 📦 Scripts Disponíveis
No package.json, você pode adicionar os seguintes scripts para facilitar a execução:

```
json
Copiar
Editar
"scripts": {
  "test": "cypress run",
  "test:open": "cypress open"
}
```
## 📸 Integração com Cypress Dashboard
Para visualizar os resultados dos testes no Cypress Dashboard, siga os passos abaixo:

1. Crie uma conta no Cypress Dashboard.
2. Conecte seu projeto local ao Dashboard:

```
npx cypress dashboard
```
3. Adicione o projeto ao Dashboard e obtenha o projectId.
4. Atualize o arquivo cypress.config.js com o projectId:

```
module.exports = {
  projectId: 'seu_project_id',
  // outras configurações
};
```
Execute os testes com gravação no Dashboard:

```
npx cypress run --record
```
