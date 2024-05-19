describe('Desktop - Learning Resources Flow', () => {
  beforeEach(() => {
    cy.viewport(1024, 800);
    cy.visit('https://tvolearn.com/');
  });

  it('should load the home page', () => {
    cy.url().should('eq', 'https://tvolearn.com/');
  });
  
  it('should open the navigation menu when the button is clicked', () => {
    cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
    cy.get('#SiteNavLabel-learning-resources-k-12').should('be.visible');
  });
});