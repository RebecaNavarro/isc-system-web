describe('template spec', () => {
  
  // Con usuario o correo y contraseña
  it('Login into WordPress', () => {
    cy.visit('https://wordpress.com/log-in/es')
    cy.get('input#usernameOrEmail').type('becanavarro2003@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type('mati110511')
    cy.get('button[type="submit"]').click()
  });
  
  // Sin usuario o correo
  it('Login into WordPress without user', () => {
    cy.visit('https://wordpress.com/log-in/es')
    cy.get('button[type="submit"]').click()
  });

  it('Ver mi sitio', () => {
    cy.visit('https://wordpress.com/log-in/es')
    cy.get('input#usernameOrEmail').type('becanavarro2003@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type('mati110511')
    cy.get('button[type="submit"]').click()
    
    cy.contains('Ver sitio').click()
    cy.url().should('include', '/home')
  });

  it('Editar mi sitio', () => {
    cy.visit('https://wordpress.com/log-in/es')
    cy.get('input#usernameOrEmail').type('becanavarro2003@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type('mati110511')
    cy.get('button[type="submit"]').click()
    
    cy.contains('Editar sitio').click()
    cy.url().should('include', '/wp-admin/site-editor.php')
    // A mi me tardo un poco en entrar :(
  });

  it('Ver mi sitio', () => {
    cy.visit('https://wordpress.com/log-in/es')
    cy.get('input#usernameOrEmail').type('becanavarro2003@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input#password', { timeout: 10000 })
    .should('be.visible').type('mati110511')
    cy.get('button[type="submit"]').click()

    cy.contains('Hola, becanavarro').click()
  })

})