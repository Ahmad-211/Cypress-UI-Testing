describe('Test Case 10 - Verify Subscription in Home Page', () => {
  it('should subscribe using the footer email input', () => {
    // Step 1 & 2: Visit homepage
    cy.visit('/');

    // Step 3: Verify homepage is visible
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Step 4: Scroll to footer
    cy.scrollTo('bottom');

    // Step 5: Verify 'SUBSCRIPTION' text
    cy.contains('Subscription').should('be.visible');

    // Step 6: Enter email and click submit (arrow button)
    const email = `user${Date.now()}@test.com`;
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();

    // Step 7: Verify success message
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});
