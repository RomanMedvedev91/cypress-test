describe('Desktop - Learning Resources links', () => {
  beforeEach(() => {
    cy.viewport(1024, 800);
    cy.visit('https://tvolearn.com/');
  });
  
  it('should navigate to the correct page', () => {
    const links = [
      { label: 'Kindergarten', href: '/pages/kindergarten' },
      { label: 'Grade 1', href: '/pages/grade-1' },
      { label: 'Grade 2', href: '/pages/grade-2' },
      { label: 'Grade 3', href: '/pages/grade-3' },
      { label: 'Grade 4', href: '/pages/grade-4' },
      { label: 'Grade 5', href: '/pages/grade-5' },
      { label: 'Grade 6', href: '/pages/grade-6' },
      { label: 'Grade 7', href: '/pages/grade-7' },
      { label: 'Grade 8', href: '/pages/grade-8' },
      { label: 'Grade 9', href: 'https://tvolearn.com/collections/courses?uff_o6ud68_metafield%3Acourse.grade=9' },
      { label: 'Grade 10', href: 'https://tvolearn.com/collections/courses?uff_o6ud68_metafield%3Acourse.grade=10' },
      { label: 'Grade 11', href: 'https://tvolearn.com/collections/courses?uff_o6ud68_metafield%3Acourse.grade=11' },
      { label: 'Grade 12', href: 'https://tvolearn.com/collections/courses?uff_o6ud68_metafield%3Acourse.grade=12' },
      { label: 'All Grades', href: 'https://tvolearn.com/collections/courses' },
    ];

    links.forEach((link) => {
      cy.get('button[aria-controls="SiteNavLabel-learning-resources-k-12"]').click();
      cy.get('#SiteNavLabel-learning-resources-k-12').should('be.visible');
      cy.contains('#SiteNavLabel-learning-resources-k-12 a.site-nav__link.site-nav__child-link', link.label).click();
      if (link.href.startsWith('https')) {
        cy.url().should('eq', link.href);
      } else {
        cy.url().should('include', link.href);
      }
    });
  });
});
