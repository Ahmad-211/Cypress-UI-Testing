/// <reference types="cypress" />

describe('Test Case 14: Place Order: Register while Checkout', () => {
  before(() => {
    cy.fixture('testuser.json').as('userData');
  });

  it('should complete registration and checkout process', function() {
    // Generate unique email address
    const timestamp = Date.now();
    const uniqueEmail = `testuser${timestamp}@gmail.com`;
    
    // Step 1: Launch browser (handled by Cypress)
    
    // Step 2: Navigate to url
    cy.visit('https://www.automationexercise.com');
    
    // Step 3: Verify that home page is visible successfully
    cy.url().should('include', 'automationexercise');
    cy.get('a[href="/"]').should('be.visible');
    
    // Step 4: Add products to cart
    cy.get('.features_items .productinfo').first().trigger('mouseover');
    cy.get('.features_items .add-to-cart').first().click();
    cy.get('button[data-dismiss="modal"]').contains('Continue Shopping').click();
    
    // Step 5: Click 'Cart' button
    cy.get('a[href="/view_cart"]').first().click();
    
    // Step 6: Verify that cart page is displayed
    cy.url().should('include', '/view_cart');
    cy.get('li.active').should('contain', 'Shopping Cart');
    
    // Step 7: Click Proceed To Checkout
    cy.get('.check_out').click();
    
    // Step 8: Click 'Register / Login' button
    cy.get('p.text-center a[href="/login"]').click();
    
    // Step 9: Fill all details in Signup and create account
    cy.get('input[data-qa="signup-name"]').type(this.userData.name);
    cy.get('input[data-qa="signup-email"]').type(uniqueEmail);
    cy.get('button[data-qa="signup-button"]').click();
    
    // Fill account information
    cy.get('#id_gender1').check();
    cy.get('#password').type(this.userData.password);
    cy.get('#days').select(this.userData.days);
    cy.get('#months').select(this.userData.months);
    cy.get('#years').select(this.userData.years);
    
    // Fill address information
    cy.get('#first_name').type(this.userData.firstName);
    cy.get('#last_name').type(this.userData.lastName);
    cy.get('#company').type(this.userData.company);
    cy.get('#address1').type(this.userData.address);
    cy.get('#country').select(this.userData.country);
    cy.get('#state').type(this.userData.state);
    cy.get('#city').type(this.userData.city);
    cy.get('#zipcode').type(this.userData.zipcode);
    cy.get('#mobile_number').type(this.userData.mobile);
    cy.get('button[data-qa="create-account"]').click();
    
    // Step 10: Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('h2[data-qa="account-created"]').should('contain', 'Account Created!');
    cy.get('a[data-qa="continue-button"]').click();
    
    // Step 11: Verify 'Logged in as username' at top
    cy.get('li a i.fa-user').parent().should('contain', `Logged in as ${this.userData.name}`);
    
    // Step 12: Click 'Cart' button
    cy.get('a[href="/view_cart"]').first().click();
    
    // Step 13: Click 'Proceed To Checkout' button
    cy.get('.check_out').click();
    
    // Step 14: Verify Address Details and Review Your Order
    cy.get('#address_delivery').should('be.visible');
    cy.get('#address_invoice').should('be.visible');
    cy.get('#cart_info').should('be.visible');
    
    // Step 15: Enter description in comment text area and click 'Place Order'
    cy.get('textarea[name="message"]').type('This is a test order. Please ignore.');
    cy.get('a[href="/payment"]').click();
    
    // Step 16: Enter payment details
    cy.get('input[name="name_on_card"]').type(this.userData.nameOnCard);
    cy.get('input[name="card_number"]').type(this.userData.ccNumber);
    cy.get('input[name="cvc"]').type(this.userData.CVC);
    cy.get('input[name="expiry_month"]').type(this.userData.expirationMonth);
    cy.get('input[name="expiry_year"]').type(this.userData.expirationYear);
    
    // Step 17: Click 'Pay and Confirm Order' button
    cy.get('#submit').click();
    
    // Step 18: Verify success message - Updated to exact match
    cy.contains('p', 'Congratulations! Your order has been confirmed!', { timeout: 15000 })
      .should('be.visible');
    
    // Step 19: Click 'Delete Account' button
    cy.get('a[href="/delete_account"]').click();
    
    // Step 20: Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.get('h2[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
    cy.get('a[data-qa="continue-button"]').click();
  });
});