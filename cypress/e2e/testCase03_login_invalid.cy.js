describe('Test Case 03 - Login User with incorrect email and password', () => {
  it("should show error message for incorrect login", () => {
    // Step 1 & 2: Launch browser and visit homepage
    cy.visit('/');

    // Step 3: Verify homepage is visible
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Step 4: Click on 'Signup / Login'
    cy.contains('Signup / Login').click();

    // Step 5: Verify 'Login to your account' is visible
    cy.contains('Login to your account').should('be.visible');

    // Step 6: Enter incorrect email and password
    cy.get('[data-qa="login-email"]').type('invaliduser123@test.com');
    cy.get('[data-qa="login-password"]').type('WrongPassword123!');

    // Step 7: Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    // Step 8: Verify error message is visible
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
