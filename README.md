# Cypress End-to-End Test Suite

## Test Approach

This test suite verifies the flow of navigating through the "Learning Resources (K-12)" section on the [TVO Learn](https://tvolearn.com) website, ensuring functionality across desktop and mobile viewports.

## Covered Test Cases

### Desktop Tests
1. Verify the home page loads correctly.
2. Verify the Learning Resources navigation menu opens when the nav button is clicked.
3. Verify navigation to the Grade 1 page and scroll to the "Learn Forward in the Curriculum" section.
4. Verify navigation to the Grade 1 Science & Technology page.
5. Verify navigation to the resources section on the Grade 1 Science & Technology page.
6. Validate error message for empty email input in the subscribe form.
7. Verify navigation from the Grade 1 Science & Technology page to the Grade 1 The Arts page.
8. Verify all links in the Learning Resources navigation menu navigate to the correct pages.

### Mobile Tests
1. Verify the home page loads correctly.
2. Verify the mobile navigation menu opens when the burger menu button is clicked.
3. Verify navigation to the All Grades page.
4. Verify navigation to the Grade 5 Social Studies page.
5. Verify navigation to the resources section on the Grade 5 Social Studies page.
6. Validate error message for empty email input in the subscribe form.
7. Verify navigation from the Grade 5 Social Studies page to the Grade 5 The Arts page.

## Assumptions
- The "Learning Resources (K-12)" dropdown and pages are accessible and contain the expected elements.
- The URL structure for grade and subject pages follows a consistent pattern.
- All Pages under Learning Resources (K-12) have same content relevant to the selected grade.
- Mobile view dropdown links works same way as desktop as tests covers only desktop view.

## Execution Results
All tests were executed successfully, validating the functionality and UI responsiveness for both desktop and mobile viewports.

## How to Run the Tests

1. Clone the repository.
2. Install dependencies:
   ```sh
    npm install
Run the tests:

3. Run the tests:
   ```sh
    npx cypress open

4. Select the desired test to run from the Cypress test runner:
   - `/cypress/e2e/desktop/learning_resources.spec.cy.js`
   - `/cypress/e2e/desktop/learning-resources-navlinks.spec.cy.js`
   - `/cypress/e2e/mobile/learning_resources.spec.cy.js`