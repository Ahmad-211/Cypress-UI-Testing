describe('Test Case 18: View Category Products', () => {
  it('should navigate through category products', () => {
    // Steps 1-2: Launch browser and navigate to URL
    cy.visit('https://www.automationexercise.com');

    // Step 3: Verify categories are visible on left sidebar
    cy.get('#accordian').should('be.visible');

    // Step 4: Click on 'Women' category
    cy.get('a[href="#Women"]').click();

    // Step 5: Click on 'Dress' subcategory
    cy.get('#Women a[href="/category_products/1"]').contains('Dress').click();

    // Step 6: Verify category page and title - UPDATED SELECTOR
    cy.url().should('include', '/category_products/1');
    cy.get('.title.text-center')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Women - Dress Products');
      });

    // Step 7: Click on 'Men' subcategory (Tshirts)
    cy.get('a[href="#Men"]').click();
    cy.get('#Men a[href="/category_products/3"]').contains('Tshirts').click();

    // Step 8: Verify navigation to men's category
    cy.url().should('include', '/category_products/3');
    cy.get('.title.text-center')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Men - Tshirts Products');
      });
  });
});