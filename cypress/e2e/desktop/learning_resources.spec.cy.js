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

  it('should navigate to grade 1 curriculum card Science & Technology', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12 a[href="/pages/grade-1"]').click();
    cy.get('h1').should('contain', 'Focus on Grade 1');
    cy.contains('h2', 'Learn Forward in the Curriculum').scrollIntoView().should('be.visible');
    cy.contains('#s-ace35f53-832c-4a69-8fd1-454cf9205641 div.button-subject-name', 'Science & Technology').click();
    cy.url().should('eq', 'https://tvolearn.com/pages/grade-1-science-and-technology');
  });
});
