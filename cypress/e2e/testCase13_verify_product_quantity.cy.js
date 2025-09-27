describe('Test Case 13 - Verify Product Quantity in Cart', () => {
  it('should add product with quantity 4 to cart and verify it', () => {
    cy.visit('/');

    // Step 1–3: Ensure homepage loaded
    cy.get('body').should('contain', 'Home');

    // Step 4: Click 'View Product' of the first product
    cy.get('.features_items .product-image-wrapper').first().contains('View Product').click();

    // Step 5: Verify product detail page
    cy.url().should('include', '/product_details');
    cy.get('.product-information').should('be.visible');

    // Step 6: Increase quantity to 4
    cy.get('#quantity').clear().type('4');

    // Step 7: Click 'Add to cart'
    cy.get('button.cart').click();

    // Step 8: Click 'View Cart'
    cy.contains('View Cart').click();

    // Step 9: Verify that product is displayed in cart with quantity 4
    cy.get('.cart_quantity').first().should('contain.text', '4');
  });
});
