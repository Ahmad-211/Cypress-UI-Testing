describe('Test Case 23: Verify address details in checkout page', () => {
  let user;

  before(() => {
    // Load user data from fixture and generate unique email
    cy.fixture('testuser').then((data) => {
      user = data;
      user.email = `user_${Date.now()}@mailinator.com`; // Unique email for each run
    });
  });

  it('should verify address details in checkout page', () => {
    // Step 1-2: Visit homepage
    cy.visit('https://automationexercise.com');

    // Step 3: Verify homepage is visible
    cy.get('img[alt="Website for automation practice"]').should('be.visible');

    // Step 4: Click Signup/Login
    cy.contains('Signup / Login').click();

    // Step 5: Fill signup form
    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.email);
    cy.get('button[data-qa="signup-button"]').click();

    // Fill account details
    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);
    cy.get('[data-qa="days"]').select(user.days);
    cy.get('[data-qa="months"]').select(user.months);
    cy.get('[data-qa="years"]').select(user.years);

    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#company').type(user.company);
    cy.get('#address1').type(user.address);
    cy.get('#country').select(user.country);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#mobile_number').type(user.mobile);

    cy.get('button[data-qa="create-account"]').click();

    // Step 6: Verify Account Created
    cy.contains('Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    // Step 7: Verify user is logged in
    cy.contains(`Logged in as ${user.name}`).should('be.visible');

    // Step 8: Add product to cart
    cy.get('.features_items .add-to-cart').first().click({ force: true });
    cy.contains('View Cart').click();

    // Step 9-10: Verify cart page is displayed
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');

    // Step 11: Proceed to checkout
    cy.contains('Proceed To Checkout').click();

    // Step 12: Verify delivery address
    cy.get('#address_delivery').should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.company)
      .and('contain', user.address)
      .and('contain', user.city)
      .and('contain', user.state)
      .and('contain', user.country)
      .and('contain', user.zipcode)
      .and('contain', user.mobile);

    // Step 13: Verify billing address
    cy.get('#address_invoice').should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.company)
      .and('contain', user.address)
      .and('contain', user.city)
      .and('contain', user.state)
      .and('contain', user.country)
      .and('contain', user.zipcode)
      .and('contain', user.mobile);

    // Step 14: Delete account
    cy.contains('Delete Account').click();

    // Step 15: Verify account deleted
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});
