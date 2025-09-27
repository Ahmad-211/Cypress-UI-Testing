describe('Test Case 19: View & Cart Brand Products', () => {
  it('should navigate through brand products', () => {
    // Steps 1-2: Launch browser and navigate to URL
    cy.visit('https://www.automationexercise.com');

    // Step 3: Click on 'Products' button
    cy.contains('Products').click();

    // Step 4: Verify brands are visible
    cy.get('.brands_products').should('be.visible');

    // Step 5: Click on first brand (Polo)
    cy.get('.brands-name a[href="/brand_products/Polo"]').first().click();

    // Step 6: Verify brand page and products
    cy.url().should('include', '/brand_products/Polo');
    cy.get('.title.text-center').should('contain', 'Brand - Polo Products');
    cy.get('.features_items').should('be.visible');

    // Step 7: Click on another brand (H&M)
    cy.get('.brands-name a[href="/brand_products/H&M"]').click();

    // Step 8: Verify new brand page
    cy.url().should('include', '/brand_products/H&M');
    cy.get('.title.text-center').should('contain', 'Brand - H&M Products');
    cy.get('.features_items').should('be.visible');
  });
});