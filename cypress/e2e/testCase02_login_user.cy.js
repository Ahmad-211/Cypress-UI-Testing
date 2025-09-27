describe('Test Case 02 - Login User with correct email and password', () => {
  it('should login the user and delete the account', () => {
    cy.fixture('testuser').then((user) => {
      // Step 1 & 2: Launch browser and visit site
      cy.visit('/');

      // Step 3: Verify home page is visible
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('contain', 'Home');

      // Step 4: Click 'Signup / Login'
      cy.contains('Signup / Login').click();

      // Step 5: Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible');

      // Step 6: Enter correct email and password
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);

      // Step 7: Click 'login' button
      cy.get('[data-qa="login-button"]').click();

      // Step 8: Verify 'Logged in as username' is visible
      cy.contains(`Logged in as ${user.name}`).should('be.visible');

      // Step 9: Click 'Delete Account'
      cy.contains('Delete Account').click();

      // Step 10: Verify 'ACCOUNT DELETED!' is visible
      cy.contains('Account Deleted!').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
    });
  });
});
