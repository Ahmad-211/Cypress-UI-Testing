describe('Test Case 01 - Register User (using fixture)', () => {
  it('should register a user successfully and delete the account', function () {
    cy.fixture('testuser').then((user) => {
      // Visit homepage
      cy.visit('/');

      // Verify homepage loaded
      cy.url().should('include', 'automationexercise');
      cy.get('body').should('contain', 'Home');

      // Click 'Signup / Login'
      cy.contains('Signup / Login').click();

      // Verify 'New User Signup!'
      cy.contains('New User Signup!').should('be.visible');

      // Fill name and email (append timestamp to avoid duplicate)
      const uniqueEmail = `user${Date.now()}@gmail.com`;
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(uniqueEmail);

      // Click Signup
      cy.get('[data-qa="signup-button"]').click();

      // Verify account info page
      cy.contains('Enter Account Information').should('be.visible');

      // Fill form
      cy.get('#id_gender1').check(); // Title: Mr.
      cy.get('#password').type(user.password);
      cy.get('#days').select(user.days);
      cy.get('#months').select(user.months);
      cy.get('#years').select(user.years);

      // Check newsletter and offers
      cy.get('#newsletter').check();
      cy.get('#optin').check();

      // Fill address details
      cy.get('#first_name').type(user.firstName);
      cy.get('#last_name').type(user.lastName);
      cy.get('#company').type(user.company);
      cy.get('#address1').type(user.address);
      cy.get('#country').select(user.country);
      cy.get('#state').type(user.state);
      cy.get('#city').type(user.city);
      cy.get('#zipcode').type(user.zipcode);
      cy.get('#mobile_number').type(user.mobile);

      // Create account
      cy.get('[data-qa="create-account"]').click();

      // Verify success
      cy.contains('Account Created!').should('be.visible');

      // Click continue
      cy.get('[data-qa="continue-button"]').click();

      // Verify logged in
      cy.contains(`Logged in as ${user.name}`).should('be.visible');

      // Delete account
      cy.contains('Delete Account').click();

      // Confirm deletion
      cy.contains('Account Deleted!').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
    });
  });
});
