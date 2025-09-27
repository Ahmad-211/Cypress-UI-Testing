describe('Test Case 11 - Verify Subscription in Cart Page', () => {
  it('should subscribe from cart page footer', () => {
    cy.visit('/');

    // Verify homepage
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Click on 'Cart'
    cy.contains('Cart').click();

    // Scroll to footer
    cy.scrollTo('bottom');

    // Verify 'SUBSCRIPTION' text
    cy.contains('Subscription').should('be.visible');

    // Enter email and submit
    const email = `user${Date.now()}@test.com`;
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();

    // Verify success message
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});
