describe('Test Case 22: Add to cart from Recommended items', () => {
  it('should add a recommended product to cart and verify it', () => {
    // Step 1: Launch browser and Step 2: Navigate to url
    cy.visit('http://automationexercise.com');

    // Step 3: Scroll to bottom of page
    cy.scrollTo('bottom');

    // Step 4: Verify 'RECOMMENDED ITEMS' are visible
    cy.contains('recommended items').should('be.visible');

    // Step 5: Click on 'Add To Cart' on Recommended product
    // Assuming recommended items have a class or selector like '.recommended_items .add-to-cart'
    cy.get('.recommended_items .add-to-cart').first().click({ force: true });

    // Wait for modal or button to show up (if any)
    cy.wait(1000); // Optional, adjust based on UI behavior

    // Step 6: Click on 'View Cart' button
    cy.contains('View Cart').click();

    // Step 7: Verify that product is displayed in cart page
    // Assuming cart items have selector like '.cart_info'
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');
  });
});
