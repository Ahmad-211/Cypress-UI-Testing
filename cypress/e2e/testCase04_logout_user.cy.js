describe('Test Case 04 - Logout User', () => {
  it('should login and then logout successfully', () => {
    cy.fixture('testuser').then((user) => {
      // Step 1 & 2: Visit homepage
      cy.visit('/');

      // Step 3: Verify homepage is visible
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('contain', 'Home');

      // Step 4: Click 'Signup / Login'
      cy.contains('Signup / Login').click();

      // Step 5: Verify 'Login to your account'
      cy.contains('Login to your account').should('be.visible');

      // Step 6: Enter correct email and password
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);

      // Step 7: Click login
      cy.get('[data-qa="login-button"]').click();

      // Step 8: Verify login
      cy.contains(`Logged in as ${user.name}`).should('be.visible');

      // Step 9: Click logout
      cy.contains('Logout').click();

      // Step 10: Verify user is navigated to login page
      cy.url().should('include', '/login');
      cy.contains('Login to your account').should('be.visible');
    });
  });
});
