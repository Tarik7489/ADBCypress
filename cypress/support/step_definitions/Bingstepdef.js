import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"







//after completion of one scenario before and after hook will run




Before(() => {




    cy.log("Before Hook....")




})







After(() => {




    cy.log("After Hook....")




})







Given("User is on bing page", () => {




    cy.visit("https://www.bing.com/")




})




When("user click on search button", () => {




    cy.get(".sb_form_q.sb_form_ta").click({ force: true })




    cy.wait(3000)




})




When("user type for {string}", (product) => {




    cy.get(".sb_form_q.sb_form_ta").type(product)




})




When("click on {string}", () => {




    cy.contains('cypress').click()




    cy.wait(2000)




})




Then("title should contain {string}", (keyword) => {




    cy.get('.sb_count').should("contain", keyword)




})