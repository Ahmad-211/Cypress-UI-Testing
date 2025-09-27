describe('Test Case 20: Search Products and Verify Cart After Login', () => {
  it('should search products and verify cart persistence after login', () => {
    const searchTerm = 'tshirt'; // Lowercase search term
    const searchVariations = ['tshirt', 't-shirt', 't shirt']; // All possible variations
    
    cy.fixture('testuser.json').then((user) => {
      // Steps 1-2: Launch browser and navigate to URL
      cy.visit('https://www.automationexercise.com');

      // Step 3-4: Go to Products page and verify
      cy.contains('Products').click();
      cy.url().should('include', '/products');

      // Step 5-6: Search for products and verify results
      cy.get('#search_product').type('Tshirt'); // Original search term
      cy.get('#submit_search').click();
      cy.get('.title.text-center').should('contain', 'Searched Products');

      // Step 7: Verify all searched products are visible - FIXED ASSERTION
      cy.get('.features_items .productinfo').each(($el) => {
        cy.wrap($el).find('p').invoke('text').then((productText) => {
          const normalizedText = productText.toLowerCase()
            .replace(/-/g, '')  // Remove hyphens
            .replace(/\s/g, ''); // Remove spaces
          
          expect(normalizedText).to.include('tshirt');
        });
      });

      // Rest of the test steps remain the same...
      // Step 8: Add products to cart
      cy.get('.add-to-cart').first().click();
      cy.contains('Continue Shopping').click();

      // Step 9: Verify cart
      cy.contains('Cart').click();
      cy.get('#cart_info_table tbody tr').should('have.length.at.least', 1);

      // Step 10: Login
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      // Step 11-12: Verify cart after login
      cy.contains('Cart').click();
      cy.get('#cart_info_table tbody tr').should('have.length.at.least', 1);
    });
  });
});