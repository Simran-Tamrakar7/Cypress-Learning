describe('Login Functionality', () => {

  const baseUrl = 'https://bk-fk.info.com.np/';
  const validUser = 'Dealverifier01@no.com';
  const validPass = 'Test@12345';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type(validUser);
    cy.get('#password').type(validPass);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('wrongUser@no.com');
    cy.get('#password').type(validPass);
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid username or password').should('be.visible');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type(validUser);
    cy.get('#password').type('WrongPass123');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid username or password').should('be.visible');
  });

  it('Empty username and password', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Username is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

});
