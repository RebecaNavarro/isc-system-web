describe('template spec', () => {
  
  const pageURL = "https://wordpress.com/log-in/es";
  const adminEmail = Cypress.env("ADMIN_EMAIL");
  const adminPassword = Cypress.env("ADMIN_PASSWORD");

  beforeEach(() => {
    cy.visit(pageURL);
  });

  // Con usuario o correo y contraseña
  it('Login into WordPress', () => {
    cy.get('input#usernameOrEmail').type(adminEmail)
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type(adminPassword)
    cy.get('button[type="submit"]').click()
  });
  
  // Sin usuario o correo
  it('Login into WordPress without user', () => {
    cy.get('button[type="submit"]').click()
  });

  it('Ver mi sitio', () => {
    cy.get('input#usernameOrEmail').type(adminEmail)
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type(adminPassword)
    cy.get('button[type="submit"]').click()
    
    cy.contains('Ver sitio').click()
    cy.url().should('include', '/home')
  });

  it('Editar mi sitio', () => {
    cy.get('input#usernameOrEmail').type(adminEmail)
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type(adminPassword)
    cy.get('button[type="submit"]').click()
    
    cy.contains('Editar sitio').click()
    cy.url().should('include', '/wp-admin/site-editor.php')
    // A mi me tardo un poco en entrar :(
  });

  it('Ver el perfil', () => {
    cy.get('input#usernameOrEmail').type(adminEmail)
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type(adminPassword)
    cy.get('button[type="submit"]').click()

    cy.contains('Hola, becanavarro').click()
  })

})