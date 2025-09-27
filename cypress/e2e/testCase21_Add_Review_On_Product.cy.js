describe('Test Case 21: Add review on product', () => {
  it('should add a product review successfully', () => {
    // Test data
    const reviewData = {
      name: 'Test User',
      email: 'testuser@example.com',
      review: 'This is an excellent product! Highly recommended.'
    };

    // Steps 1-2: Launch browser and navigate to URL
    cy.visit('https://www.automationexercise.com');

    // Step 3-4: Go to Products page and verify
    cy.contains('Products').click();
    cy.url().should('include', '/products');

    // Step 5: Click on 'View Product' button (first product)
    cy.get('.choose a').first().click();

    // Step 6: Verify 'Write Your Review' is visible
    cy.contains('Write Your Review').should('be.visible');

    // Step 7: Enter name, email and review
    cy.get('#name').type(reviewData.name);
    cy.get('#email').type(reviewData.email);
    cy.get('#review').type(reviewData.review);

    // Step 8: Click 'Submit' button
    cy.get('#button-review').click();

    // Step 9: Verify success message
    cy.contains('Thank you for your review.').should('be.visible');
  });
});