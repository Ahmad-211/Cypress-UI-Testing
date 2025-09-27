describe('Test Case 16: Place Order - Login before Checkout', () => {
  it('should login and complete checkout successfully', () => {
    cy.fixture('testuser.json').then((user) => {
      // Steps 1-3: Launch browser and verify homepage
      cy.visit('https://www.automationexercise.com');
      cy.url().should('include', 'automationexercise');
      cy.contains('Home').should('be.visible');

      // Step 4-5: Login with existing credentials
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      // Step 6: Verify login success
      cy.contains(`Logged in as ${user.name}`).should('be.visible');

      // Step 7: Add product to cart
      cy.get('.product-overlay').first().trigger('mouseover');
      cy.contains('Add to cart').first().click();
      cy.contains('Continue Shopping').click();

      // Step 8-9: Navigate to cart and verify
      cy.contains('Cart').click();
      cy.url().should('include', '/view_cart');

      // Step 10-11: Proceed to checkout and verify order
      cy.contains('Proceed To Checkout').click();
      cy.contains('Review Your Order').should('be.visible');

      // Step 12: Add comment and place order
      cy.get('textarea[name="message"]').type('Order comment from Test Case 16');
      cy.contains('Place Order').click();

      // Step 13-14: Enter payment details and confirm
      cy.get('[data-qa="name-on-card"]').type(user.nameOnCard);
      cy.get('[data-qa="card-number"]').type(user.ccNumber);
      cy.get('[data-qa="cvc"]').type(user.CVC);
      cy.get('[data-qa="expiry-month"]').type(user.expirationMonth);
      cy.get('[data-qa="expiry-year"]').type(user.expirationYear);
      cy.get('[data-qa="pay-button"]').click();

      // Step 15: Verify success message
      cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

      // Step 16-17: Delete account
      cy.contains('Delete Account').click();
      cy.contains('Account Deleted!').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
    });
  });
});