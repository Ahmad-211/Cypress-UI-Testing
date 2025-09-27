describe('Test Case 06 - Contact Us Form', () => {
  it('should submit the contact us form successfully', () => {
    // Step 1 & 2: Visit homepage
    cy.visit('/');

    // Step 3: Verify homepage is visible
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('contain', 'Home');

    // Step 4: Click on 'Contact Us'
    cy.contains('Contact us').click();

    // Step 5: Verify 'GET IN TOUCH' is visible
    cy.contains('Get In Touch').should('be.visible');

    // Step 6: Fill in the form
    cy.get('[data-qa="name"]').type('John Doe');
    cy.get('[data-qa="email"]').type('johndoe@example.com');
    cy.get('[data-qa="subject"]').type('Feedback about the website');
    cy.get('[data-qa="message"]').type('This is a test message submitted via Cypress.');

    // Step 7: Upload a file (ensure the file exists in cypress/fixtures folder)
    cy.get('input[type="file"]').attachFile('sampleFile.txt'); // Make sure you have 'sampleFile.txt' in fixtures

    // Step 8: Click 'Submit'
    cy.get('[data-qa="submit-button"]').click();

    // Step 9: Click OK on alert (auto-handled by Cypress, no need for explicit OK click)

    // Step 10: Verify success message
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

    // Step 11: Click 'Home' and verify redirection
    cy.contains('Home').click();
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('contain', 'Home');
  });
});
