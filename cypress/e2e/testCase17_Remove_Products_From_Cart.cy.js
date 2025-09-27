describe('Test Case 17: Remove Products From Cart', () => {
  it('should remove products from cart successfully', () => {
    // Steps 1-3: Launch browser and verify homepage
    cy.visit('https://www.automationexercise.com');
    cy.url().should('include', 'automationexercise');
    cy.contains('Home').should('be.visible');

    // Step 4: Add products to cart
    cy.get('.product-overlay').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();
    cy.contains('Continue Shopping').click();

    // Step 5-6: Navigate to cart and verify
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');

    // Step 7: Remove product (click 'X' button)
    cy.get('.cart_quantity_delete').first().click();

    // Step 8: Verify product is removed
    cy.contains('Cart is empty!').should('be.visible'); // Adjust selector if needed
    // OR: Check if the product row is removed
    // cy.get('.product-row').should('not.exist');
  });
});