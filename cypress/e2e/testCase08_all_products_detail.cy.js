describe('Test Case 08 - Verify All Products and Product Detail Page', () => {
  it('should show all products and open product detail page', () => {
    // Step 1 & 2: Visit homepage
    cy.visit('/');

    // Step 3: Verify homepage is visible
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Step 4: Click on 'Products' button
    cy.contains('Products').click();

    // Step 5: Verify navigation to 'ALL PRODUCTS' page
    cy.url().should('include', '/products');
    cy.get('.title').should('contain', 'All Products');

    // Step 6: Verify product list is visible
    cy.get('.features_items').should('be.visible');

    // Step 7: Click 'View Product' on the first product
    cy.get('.features_items .product-image-wrapper').first().contains('View Product').click();

    // Step 8: Verify navigation to product detail page
    cy.url().should('include', '/product_details');

    // Step 9: Verify product details are visible
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); // Product name
      cy.contains('Category').should('be.visible');
      cy.contains('Rs.').should('be.visible'); // Price
      cy.contains('Availability').should('be.visible');
      cy.contains('Condition').should('be.visible');
      cy.contains('Brand').should('be.visible');
    });
  });
});
