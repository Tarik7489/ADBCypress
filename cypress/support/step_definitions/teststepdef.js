
import { Given,When,Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"

Given("User is on Bing home page", () => {
  cy.visit("https://www.bing.com/");
});

When("User enters value as {string}", (searchValue) => {
  cy.get('textarea[inputmode="search"]').type(searchValue);
});

When("Press enter key on the keyboard", () => {
  cy.get('textarea[inputmode="search"]').type("{enter}");
});

Then("User should navigate to search results page", () => {
  cy.url().should("include", "/search");
});

Then("Search results should contain {string}", (searchValue) => {
  cy.get("#b_results").contains(searchValue).should("be.visible");
});


