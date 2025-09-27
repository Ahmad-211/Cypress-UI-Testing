describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
  it('should scroll down and up successfully using arrow button', () => {
    // 1-2: Visit site
    cy.visit('https://automationexercise.com');

    // 3: Verify home page
    cy.get('img[alt="Website for automation practice"]').should('be.visible');

    // 4: Scroll to bottom
    cy.scrollTo('bottom');

    // 5: Verify Subscription is visible
    cy.contains('Subscription', { matchCase: false }).should('be.visible');

    // 6: Click scroll-up arrow
    cy.get('#scrollUp', { timeout: 10000 })
      .should('exist')
      .scrollIntoView()
      .click({ force: true });

    // 7: Wait and verify top text
    cy.wait(1000);
    cy.contains('Full-Fledged practice website for Automation Engineers')
      .should('be.visible');
  });
});
