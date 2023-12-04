/// <reference types="cypress"/>

it("Page Load and Navigation", () => {
  cy.visit("http://localhost:5173/");
  cy.get(".active > .nav-link").click();
  cy.get(":nth-child(2) > .nav-link").click();
  cy.get(":nth-child(3) > .nav-link").click();
  cy.get(".navbar-brand").click();
});
