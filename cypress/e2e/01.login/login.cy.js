// Тест на вход в систем
describe ('Вход в систему', () => {
    
let testData;

before(() => {
        cy.fixture('test_users').then((data) => {
        testData = data;
    });
  });

beforeEach(() => {
    cy.visit(`${testData.baseURL}/web/index.php/auth/login`);
    cy.get('input[placeholder="Username"]')
    });

// Тест успешного входа

it ('Успешная авторизация', () => {
    cy.get('input[name="username"]')
        .type(testData.validUser.login);

    cy.get('input[name="password"]')
        .type(testData.validUser.password);

    cy.get('button[type="submit"]').click();
});

})