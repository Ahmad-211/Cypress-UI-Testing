describe('Test Case 15 - Place Order: Register before Checkout', () => {
  it('should register first and then place order successfully', () => {
    cy.fixture('testuser').then((user) => {
      cy.visit('/');

      // Step 3: Home page
      cy.contains('Home').should('be.visible');

      // Step 4–5: Register/Login
      cy.contains('Signup / Login').click();
      const uniqueEmail = `user${Date.now()}@test.com`;
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(uniqueEmail);
      cy.get('[data-qa="signup-button"]').click();

      // Fill form
      cy.contains('Enter Account Information').should('be.visible');
      cy.get('#id_gender1').check();
      cy.get('#password').type(user.password);
      cy.get('#days').select(user.days);
      cy.get('#months').select(user.months);
      cy.get('#years').select(user.years);
      cy.get('#newsletter').check();
      cy.get('#optin').check();
      cy.get('#first_name').type(user.firstName);
      cy.get('#last_name').type(user.lastName);
      cy.get('#company').type(user.company);
      cy.get('#address1').type(user.address);
      cy.get('#country').select(user.country);
      cy.get('#state').type(user.state);
      cy.get('#city').type(user.city);
      cy.get('#zipcode').type(user.zipcode);
      cy.get('#mobile_number').type(user.mobile);
      cy.get('[data-qa="create-account"]').click();

      // Step 6–7: Confirm account
      cy.contains('Account Created!').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
      cy.contains(`Logged in as ${user.name}`).should('be.visible');

      // Step 8: Add product
      cy.contains('Products').click();
      cy.get('.product-overlay').eq(0).invoke('show');
      cy.contains('Add to cart').first().click();
      cy.contains('Continue Shopping').click();

      // Step 9: Go to cart
      cy.contains('Cart').click();

      // Step 10: Cart page check
      cy.url().should('include', 'view_cart');

      // Step 11–12: Checkout and verify order summary
      cy.contains('Proceed To Checkout').click();
      cy.contains('Review Your Order').should('be.visible');

      // Step 13: Enter comment and place order
      cy.get('textarea[name="message"]').type('Ordering from Test Case 15');
      cy.contains('Place Order').click();

      // Step 14–15: Payment details
      cy.get('[data-qa="name-on-card"]').type(user.nameOnCard);
      cy.get('[data-qa="card-number"]').type(user.ccNumber);
      cy.get('[data-qa="cvc"]').type(user.CVC);
      cy.get('[data-qa="expiry-month"]').type(user.expirationMonth);
      cy.get('[data-qa="expiry-year"]').type(user.expirationYear);
      cy.get('[data-qa="pay-button"]').click();

      // Step 16: Success message
      cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

      // Step 17–18: Delete account
      cy.contains('Delete Account').click();
      cy.contains('Account Deleted!').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
    });
  });
});
