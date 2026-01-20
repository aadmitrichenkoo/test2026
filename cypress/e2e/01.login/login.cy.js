const { beforeEach } = require("node:test");

// Тест на вход в систему

describe('Вход в систему', () => {
    
let testData;

    before(() => {
    cy.fixtures('test_users').then((data) => {
    testData = data;
    });
  });

beforeEach(() => {
    cy.visit(testData.baseURL)/web/index.php/auth/login
    cy.wait(5000);

})

// Тест успешного входа

it('Успешная авторизация', () => {
    cy.get('[class="oxd-input oxd-input--active"]').type(login);
    cy.get('[class="oxd-input oxd-input--active"]').type(password);

})

});