describe('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
  it('should scroll down and up successfully without using scroll-up arrow', () => {
    // 1-2: Launch and visit site
    cy.visit('https://automationexercise.com');

    // 3: Verify home page is visible successfully
    cy.get('img[alt="Website for automation practice"]', { timeout: 10000 }).should('be.visible');

    // 4: Scroll down to bottom of page
    cy.scrollTo('bottom', { duration: 1000 });
    cy.wait(2000); // Wait to ensure elements load

    // 5: Verify "SUBSCRIPTION" is visible
    cy.get('h2:contains("Subscription")', { timeout: 5000 }).should('be.visible');

    // 6: Scroll up to top
    cy.scrollTo('top', { duration: 1000 });
    cy.wait(2000); // Wait after scroll

    // 7: Verify top section is visible by checking known top banner container
    cy.get('.carousel-inner').should('be.visible');
    
  });
});
