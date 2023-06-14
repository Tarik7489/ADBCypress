import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";





Given("User is on the Login home screen", () => {

    cy.visit("https://noumena-web-staging.web.app/login")

});

When("User types email as {string}", (email) => {

    cy.get('input[name="email"]').type(email)

});

Then('Clicks on Login button',()=>{

    cy.get('button[type="submit"]').click()

});

When("User types otp as {string}", (otp) => {

    cy.get('input[data-cy="OtpInput-cy-0"]').type(otp)

});
Then('User Clicks on the Next Button',()=>{

    cy.get('button[data-testid="otp-submit-button"]').click()

});
Then('User should be logged in successfully',()=>{

 cy.url().should('include','https://noumena')

});



