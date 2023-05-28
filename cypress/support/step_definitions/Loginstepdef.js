
import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"


Before(() => {
    cy.log("Before Hook....");
});

After(() => {
    cy.log("After Hook....");
});

Given("User is on Noumena Login Page", () => {
    cy.visit("https://noumena-web-staging.web.app/login");
});


When("User enters email as {string}", function (email) {
    cy.get('input[name="email"]').type(email);
  });
  
When("click on login button", () => {
    cy.get('button[data-testid="button"]').click();
});

Then("User should navigate to OTP screen", () => {
    cy.contains('Verification Code Sent').should('be.visible');
});






