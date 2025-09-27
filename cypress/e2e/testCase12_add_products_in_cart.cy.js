describe('Test Case 12 - Add Products in Cart', () => {
  it('should add two products to the cart and verify their details', () => {
    cy.visit('/');

    // Verify Home Page
    cy.get('body').should('contain', 'Home');

    // Click on 'Products'
    cy.contains('Products').click();
    cy.url().should('include', '/products');

    // Wait for products to load
    cy.get('.features_items').should('be.visible');

    // Add first product
    cy.get('.product-image-wrapper').eq(0).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(0).contains('Add to cart').click();

    // Click on 'Continue Shopping'
    cy.contains('Continue Shopping').click();

    // Add second product
    cy.get('.product-image-wrapper').eq(1).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(1).contains('Add to cart').click();

    // Click on 'View Cart'
    cy.contains('View Cart').click();

    // Validate 2 products are in cart
    cy.get('.cart_description').should('have.length', 2);

    // Verify price, quantity, and total for both products
    cy.get('.cart_price').should('have.length', 2);
    cy.get('.cart_quantity').should('have.length', 2);
    cy.get('.cart_total_price').should('have.length', 2);
  });
});
