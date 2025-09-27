describe('Test Case 07 - Navigate to Test Cases Page', () => {
  it('should navigate to the test cases page successfully', () => {
    // Step 1 & 2: Visit homepage
    cy.visit('/');

    // Step 3: Verify homepage is visible
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Step 4: Click on 'Test Cases'
    cy.contains('Test Cases').click();

    // Step 5: Verify navigation to test cases page
    cy.url().should('include', '/test_cases');
    cy.get('body').should('contain', 'Test Cases');
  });
});
