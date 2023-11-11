/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import About from '@/app/about/page';

describe('<About />', () => {
  it('should render and display expected content', () => {
    cy.mount(<About />);

    cy.get('.main').contains('I am a software engineer');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
