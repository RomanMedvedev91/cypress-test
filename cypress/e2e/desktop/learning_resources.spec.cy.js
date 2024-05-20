describe('Desktop - Learning Resources Flow', () => {
  beforeEach(() => {
    cy.viewport(1024, 800);
    cy.visit('https://tvolearn.com/');
  });

  it('should load the home page', () => {
    cy.url().should('eq', 'https://tvolearn.com/');
  });
  
  it('should open the navigation menu when the nav button is clicked', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12').should('be.visible');
  });

  it('should navigate to the grade-1 page & scoll to Learn Forward in the Curriculum section', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12 a[href="/pages/grade-1"]').click();
    cy.get('h1').should('contain', 'Focus on Grade 1');
    cy.contains('h2', 'Learn Forward in the Curriculum').scrollIntoView().should('be.visible');
  });

  it('should navigate to page grade 1 Science & Technology', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12 a[href="/pages/grade-1"]').click();
    cy.get('h1').should('contain', 'Focus on Grade 1');
    cy.contains('h2', 'Learn Forward in the Curriculum').scrollIntoView().should('be.visible');
    cy.contains('#s-ace35f53-832c-4a69-8fd1-454cf9205641 div.button-subject-name', 'Science & Technology').click();
    cy.url().should('eq', 'https://tvolearn.com/pages/grade-1-science-and-technology');
  });

  it('should navigate to resources section on page grade 1 Science & Technology ', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12 a[href="/pages/grade-1"]').click();
    cy.contains('h2', 'Learn Forward in the Curriculum').scrollIntoView().should('be.visible');
    cy.contains('#s-ace35f53-832c-4a69-8fd1-454cf9205641 div.button-subject-name', 'Science & Technology').click();
    cy.contains('h3', 'On this page:').scrollIntoView().should('be.visible');
    cy.contains('a.button-small', 'Resources for Learning').should('be.visible').click();
    cy.get('ul#resources').should('be.visible');
  });

  it('displays error message for empty email input', () => {
    cy.visit('https://tvolearn.com/pages/grade-1-science-and-technology');
    cy.get('#mc-embedded-subscribe-form').scrollIntoView().should('be.visible');
    cy.get('#mc-embedded-subscribe').click();
    cy.get('.mce_inline_error').should('be.visible').and('contain.text', 'This field is required.');
  });

    it('should navigate to page grade 1 the Arts from page grade 1 Science & Technology', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12 a[href="/pages/grade-1"]').click();
    cy.contains('h2', 'Learn Forward in the Curriculum').scrollIntoView().should('be.visible');
    cy.contains('#s-ace35f53-832c-4a69-8fd1-454cf9205641 div.button-subject-name', 'Science & Technology').click();
    cy.contains('h2', 'Looking for a Different Subject?').scrollIntoView().should('be.visible').click();
    cy.contains('div.button-subject-name', 'The Arts').click();
    cy.url().should('eq', 'https://tvolearn.com/pages/grade-1-the-arts');
    cy.contains('h2', 'The Arts').should('be.visible')
  });
});
