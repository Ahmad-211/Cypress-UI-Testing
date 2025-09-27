describe('Test Case 24: Download Invoice after purchase order', () => {
  let user;

  before(() => {
    // Load user fixture and assign unique email
    cy.fixture('testuser').then((data) => {
      user = data;
      user.email = `user_${Date.now()}@mailinator.com`; // ensure uniqueness
    });
  });

  it('should allow downloading invoice after placing order', () => {
    // 1-2: Launch browser and visit site
    cy.visit('https://automationexercise.com');

    // 3: Verify that home page is visible
    cy.get('img[alt="Website for automation practice"]').should('be.visible');

    // 4: Add products to cart
    cy.get('.features_items .add-to-cart').first().click({ force: true });
    cy.contains('View Cart').click();

    // 5-6: Verify cart page is displayed
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');

    // 7: Click Proceed To Checkout
    cy.contains('Proceed To Checkout').click();

    // 8: Click 'Register / Login'
    cy.contains('a', 'Register / Login', { timeout: 10000 })
  .scrollIntoView()
  .should('be.visible')
  .wait(500) // helps in case of animation or overlay
  .click({ force: true }); // force in case of hidden overlays


    // 9: Fill Signup and create account
    cy.get('input[data-qa="signup-name"]').should('be.visible').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.email);
    cy.get('button[data-qa="signup-button"]').click();

    // Fill registration form
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

    // 10: Verify account created
    cy.contains('Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').first().click();

    // 11: Verify 'Logged in as username'
    cy.contains(`Logged in as ${user.name}`).should('be.visible');

    // 12: Click 'Cart' again
    cy.get('a[href="/view_cart"]')
      .should('be.visible')
      .first()
      .click();

    // 13: Click 'Proceed To Checkout'
    cy.contains('Proceed To Checkout').click();

    // 14: Verify address details
    cy.get('#address_delivery').should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.address)
      .and('contain', user.city)
      .and('contain', user.country);

    cy.get('#address_invoice').should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.address)
      .and('contain', user.city)
      .and('contain', user.country);

    // 15: Enter comment & place order
    cy.get('textarea[name="message"]').type('Please deliver quickly.');
    cy.contains('Place Order').click();

    // 16: Enter payment details
    cy.get('[name="name_on_card"]').type(user.nameOnCard);
    cy.get('[name="card_number"]').type(user.ccNumber);
    cy.get('[name="cvc"]').type(user.CVC);
    cy.get('[name="expiry_month"]').type(user.expirationMonth);
    cy.get('[name="expiry_year"]').type(user.expirationYear);

    // 17: Click 'Pay and Confirm Order'
    cy.get('#submit').click();

    // 18: Verify success message
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    // 19: Click 'Download Invoice' and verify link
cy.contains('Download Invoice')
  .should('be.visible')
  .and('have.attr', 'href')
  .then((href) => {
    expect(href).to.include('/download_invoice');
  });



    // 20: Click 'Continue'
    cy.contains('Continue').should('be.visible').click();

    // 21: Click 'Delete Account'
    cy.contains('Delete Account').click();

    // 22: Verify 'ACCOUNT DELETED!'
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').last().click();
  });
});
