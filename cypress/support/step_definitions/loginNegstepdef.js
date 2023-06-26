import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
Given("User is on Login screen", () => {

    cy.visit("https://noumena-web-staging.web.app/login")

});

When("User types invalid email as {string}", (email) => {

    cy.get('input[name="email"]').type(email)

});

Then('Clicks on the Login button1', () => {

    cy.get('button[type="submit"]').click()

});
Then('Verify the error message', () => {

    cy.contains('Please use a valid email address (email@address.com)').should('be.visible')

});


Given("User is on Login page", () => {

    cy.visit("https://noumena-web-staging.web.app/login")

});
When("User enters invalid email as {string}", (email) => {

    cy.get('input[name="email"]').type(email)

});
Then('Click on the Login button', () => {

    cy.get('button[type="submit"]').click()

});
Then('Verify error message', () => {

    cy.contains('Please use a valid email address (email@address.com)').should('be.visible')

});
Then('Clear the email field', () => {

    cy.get('input[name="email"]').clear()

});
Then('Validate the error message', () => {

    cy.contains('This field cannot be empty').should('be.visible')

});


Given("User is on Login page1", () => {

    cy.visit("https://noumena-web-staging.web.app/login")
});
Then('Login button should be disabled', () => {

    cy.get('button[type="submit"]').should('not.be.enabled')

});

//verify the error message when user enters invalid otp
Given("User is on Login page2", () => {

    cy.visit("https://noumena-web-staging.web.app/login")
});
When("User enters valid email as {string}", (email) => {

    cy.get('input[name="email"]').type(email)
})
Then('Clicks on the Login button', () => {

    cy.get('button[type="submit"]').click()

});
When("user enters invalid OTP as {string}", (otp) => {

    cy.get('input[data-cy="OtpInput-cy-0"]').type(otp)
})
Then("Clicks on next button",()=>{
    cy.get('button[data-testid="otp-submit-button"]').click()
})
Then("Validate the toast message",()=>{
    cy.contains('Invalid code. Please try again.').should('be.visible')
})




