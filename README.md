# Automation Exercise - Cypress Test Suite

![Cypress](https://img.shields.io/badge/Cypress-12.17.0-brightgreen)
![Node](https://img.shields.io/badge/Node-%3E%3D16.x-blue)

This project implements automated test cases for the Automation Exercise website (https://automationexercise.com/) using the Cypress testing framework. The website is specifically designed for automation testing practice.

## 📁 Project Structure

```plaintext
cypress/
├── e2e/
│   ├── testCase01_Register_User.cy.js
│   ├── testCase02_Login_Correct_Credentials.cy.js
│   ├── ...
│   └── testCase26_Scroll_Up_Without_Arrow.cy.js
├── fixtures/
│   └── testuser.json           # Reusable test user data
├── support/
│   ├── commands.js             # Custom Cypress commands
│   └── e2e.js
```
## Test Coverage

This project completes all test cases outlined in [Automation Exercise Test Cases](https://automationexercise.com/test_cases).

### UI Test Cases

| Case ID | Test Case Description | Status |
|---------|-----------------------|--------|
| 1 | Register User | ✅ |
| 2 | Login User with correct email and password | ✅ |
| 3 | Login User with incorrect email and password | ✅ |
| 4 | Logout User | ✅ |
| 5 | Register User with existing email | ✅ |
| 6 | Contact Us Form | ✅ |
| 7 | Verify Test Cases Page | ✅ |
| 8 | Verify All Products and product detail page | ✅ |
| 9 | Search Product | ✅ |
| 10 | Verify Subscription in home page | ✅ |
| 11 | Verify Subscription in Cart page | ✅ |
| 12 | Add Products in Cart | ✅ |
| 13 | Verify Product quantity in Cart | ✅ |
| 14 | Place Order: Register while Checkout | ✅ |
| 15 | Place Order: Register before Checkout | ✅ |
| 16 | Place Order: Login before Checkout | ✅ |
| 17 | Remove Products From Cart | ✅ |
| 18 | View Category Products | ✅ |
| 19 | View & Cart Brand Products | ✅ |
| 20 | Search Products and Verify Cart After Login | ✅ |
| 21 | Add review on product | ✅ |
| 22 | Add to cart from Recommended items | ✅ |
| 23 | Verify address details in checkout page | ✅ |
| 24 | Download Invoice after purchase order | ✅ |
| 25 | Verify Scroll Up using 'Arrow' button and Scroll Down functionality | ✅ |
| 26 | Verify Scroll Up without 'Arrow' button and Scroll Down functionality | ✅ |

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (version 16.x or higher)
- npm (comes with Node.js)
- Cypress (will be installed via npm)

## Installation

1. **Initialize a new Node.js project**  
   *(Only needed the first time)*

   ```bash
   npm init -y
   ```
2. **Install Cypress**

   ```bash
    npm install cypress --save-dev
   ```
3. **Add your user test data in:**
   ```bash
    cypress/fixtures/testuser.json
   ```
   ## ▶️ Running the Tests

### Interactive Mode (GUI)

   ```bash
     npx cypress open
   ```

- Choose "E2E Testing"
- Select browser (Chrome, Firefox, Edge)
- Click on any test file to run

###  Headless Mode (No UI)
 **Run all test cases in headless mode (good for CI/CD pipelines):**
   ```bash
     npx cypress run
   ```
**Run in a specific browser (e.g., Chrome):**
   ```bash
     npx cypress run --browser chrome
   ```
**Run a specific test case:**
   ```bash
     npx cypress run --spec "cypress/e2e/testCase10_Verify_Subscription_Home.cy.js"
   ```