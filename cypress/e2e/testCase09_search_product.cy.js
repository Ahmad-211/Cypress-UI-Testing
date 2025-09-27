describe('Test Case 09 - Search Product', () => {
  it('should search for a product and display results', () => {
    // Step 1 & 2: Visit homepage
    cy.visit('/');

    // Step 3: Verify homepage is visible
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Step 4: Click on 'Products'
    cy.contains('Products').click();

    // Step 5: Verify navigation to All Products page
    cy.url().should('include', '/products');
    cy.get('.title').should('contain', 'All Products');

    // Step 6: Enter product name in search and click search
    cy.get('#search_product').type('Top');
    cy.get('#submit_search').click();

    // Step 7: Verify 'SEARCHED PRODUCTS' is visible
    cy.contains('Searched Products').should('be.visible');

    // Step 8: Verify products are displayed
    cy.get('.features_items .product-image-wrapper').should('have.length.at.least', 1);
  });
});
