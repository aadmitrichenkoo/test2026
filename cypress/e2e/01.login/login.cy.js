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
    cy.get('input[placeholder="Username"]').should('be.visible');
    });

// Тест успешного входа
it ('Успешная авторизация', () => {
    cy.get('input[="Username"]')
        .type(testData.validUser.login);

    cy.get('input[name="password"]')
        .type(testData.validUser.password);

    cy.get('button[type="submit"]').click();
    });


// Негативный тест
it ('Негативная авторизация', () => {
    cy.get('input[name="username"]')
        .type(testData.invalidUser.login);

    cy.get('input[name="password"]')
        .type(testData.invalidUser.password);

    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text')
        .should('be.visible')
        .and('contain', 'Invalid credentials');
    });
});