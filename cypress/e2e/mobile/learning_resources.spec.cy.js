describe('Mobile - Learning Resources Flow', () => {
  beforeEach(() => {
    cy.viewport(430, 932);
    cy.visit('https://tvolearn.com/');
  });

  it('should load the home page', () => {
    cy.url().should('eq', 'https://tvolearn.com/');
  });
  
  it('should open the navigation menu when the burger menu button is clicked', () => {
    cy.get('div.grid__item.medium-up-hide-modified.medium-up--one-eighth.text-right.site-header__icons div.site-header__icons-wrapper button.btn--link.site-header__icon.site-header__menu.js-mobile-nav-toggle.mobile-nav--open').click();
    cy.get('#MobileNav').should('be.visible');
    cy.get('button.btn--link.js-toggle-submenu.mobile-nav__link[data-target="learning-resources-k-12-1"]').click();
    cy.get('ul.mobile-nav__dropdown[data-parent="learning-resources-k-12-1"][data-level="2"]').should('be.visible');
  });

  it('should navigate to the all Grades page', () => {
    cy.get('div.grid__item.medium-up-hide-modified.medium-up--one-eighth.text-right.site-header__icons div.site-header__icons-wrapper button.btn--link.site-header__icon.site-header__menu.js-mobile-nav-toggle.mobile-nav--open').click();
    cy.get('button.btn--link.js-toggle-submenu.mobile-nav__link[data-target="learning-resources-k-12-1"]').click();
    cy.get('div.pink_banner_x[aria-label="dismiss this banner"]').click();
    cy.contains('ul.mobile-nav__dropdown[data-level="2"] li.mobile-nav__item a.mobile-nav__sublist-link', 'All Grades').click();
    cy.url().should('eq', 'https://tvolearn.com/collections/courses');
    cy.contains('h1',  'Welcome to our Study Hall for Grades 9-12').should('be.visible');
  });


  it('should navigate to the grade 5 social studies page', () => {
    cy.get('div.grid__item.medium-up-hide-modified.medium-up--one-eighth.text-right.site-header__icons div.site-header__icons-wrapper button.btn--link.site-header__icon.site-header__menu.js-mobile-nav-toggle.mobile-nav--open').click();
    cy.get('button.btn--link.js-toggle-submenu.mobile-nav__link[data-target="learning-resources-k-12-1"]').click();
    cy.get('div.pink_banner_x[aria-label="dismiss this banner"]').click();
    cy.contains('ul.mobile-nav__dropdown[data-level="2"] li.mobile-nav__item a.mobile-nav__sublist-link', 'Grade 5').click();
    cy.contains('h2', 'Learn Forward in the Curriculum').scrollIntoView().should('be.visible');
    cy.contains('div.button-subject.button-social', 'Social Studies').scrollIntoView().click();
    cy.url().should('eq', 'https://tvolearn.com/pages/grade-5-social-studies');
    cy.contains('h2', 'Social Studies').should('be.visible');
  });

  it('should navigate to resources section on page grade 5 social studies', () => {
    //open menu
    cy.get('div.grid__item.medium-up-hide-modified.medium-up--one-eighth.text-right.site-header__icons div.site-header__icons-wrapper button.btn--link.site-header__icon.site-header__menu.js-mobile-nav-toggle.mobile-nav--open').click();
    // select learning resources k-12
    cy.get('button.btn--link.js-toggle-submenu.mobile-nav__link[data-target="learning-resources-k-12-1"]').click();
    // select grade 5
    cy.contains('ul.mobile-nav__dropdown[data-level="2"] li.mobile-nav__item a.mobile-nav__sublist-link', 'Grade 5').click();
    // scroll down to social studies card
    cy.contains('div.button-subject.button-social', 'Social Studies').scrollIntoView().click();
    // scroll down to links
    cy.contains('h3', 'On this page:').scrollIntoView().should('be.visible');
    // click on resources for learning
    cy.contains('a.button-small', 'Resources for Learning').should('be.visible').click();
    // confirm resources is in viewport
    cy.get('ul#resources').should('be.visible');
  });

  it('displays error message for empty email input', () => {
    cy.visit('https://tvolearn.com/pages/grade-5-social-studies');
    cy.get('#mc-embedded-subscribe-form').scrollIntoView().should('be.visible');
    cy.get('#mc-embedded-subscribe').click();
    cy.get('.mce_inline_error').should('be.visible').and('contain.text', 'This field is required.');
  });

    it('should navigate to page grade 1 the Arts from page grade 5 Social Studies', () => {
      cy.get('div.grid__item.medium-up-hide-modified.medium-up--one-eighth.text-right.site-header__icons div.site-header__icons-wrapper button.btn--link.site-header__icon.site-header__menu.js-mobile-nav-toggle.mobile-nav--open').click();
      cy.get('button.btn--link.js-toggle-submenu.mobile-nav__link[data-target="learning-resources-k-12-1"]').click();
      cy.contains('ul.mobile-nav__dropdown[data-level="2"] li.mobile-nav__item a.mobile-nav__sublist-link', 'Grade 5').click();
      cy.contains('div.button-subject.button-social', 'Social Studies').scrollIntoView().click();

    cy.contains('h2', 'Looking for a Different Subject?').scrollIntoView().should('be.visible');
    cy.contains('div.button-subject-name', 'The Arts').click();
    cy.url().should('eq', 'https://tvolearn.com/pages/grade-5-the-arts');
    cy.contains('h2', 'The Arts').should('be.visible')
  });
});
