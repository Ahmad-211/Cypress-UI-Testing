describe('Test Case 05 - Register User with existing email', () => {
  it('should show error when trying to register with existing email', () => {
    cy.fixture('testuser').then((user) => {
      // Step 1 & 2: Visit homepage
      cy.visit('/');

      // Step 3: Verify homepage is visible
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('contain', 'Home');

      // Step 4: Click 'Signup / Login'
      cy.contains('Signup / Login').click();

      // Step 5: Verify 'New User Signup!' is visible
      cy.contains('New User Signup!').should('be.visible');

      // Step 6: Enter name and existing email
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);

      // Step 7: Click 'Signup' button
      cy.get('[data-qa="signup-button"]').click();

      // Step 8: Verify error message
      cy.contains('Email Address already exist!').should('be.visible');
    });
  });
});
