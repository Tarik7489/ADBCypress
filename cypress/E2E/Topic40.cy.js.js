describe('Practice',function(){

    it('checkbox',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('.id="checkBoxOption1"').check().should('be.checked')
    })
})