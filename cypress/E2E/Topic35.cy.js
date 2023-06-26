// https://github.com/tnicola/cypress-parallel


// npm i cypress-parallel -D

describe('Practice', function () {

    it('checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[id="checkBoxOption1"]').check().should('be.checked')
        cy.get('input[id="checkBoxOption1"]').uncheck().should('not.be.checked')

        //static dropdown
        cy.get('Select').select('Option3').should('have.value', 'option3')

        //dynamic dropdown

    })

    it('Dynamic', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[placeholder="Type to Select Countries"]').type('Ind')
        cy.contains('India').click()
    })

    it('Window alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#alertbtn').click()

        //validate alert message
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })
        it('Window confirm', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            //validate alert message
            cy.get('#confirmbtn').click()
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            })
    })

    it('Open Chile browser',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.qaclickacademy.com/')
    })
    it.only('Mouse Over',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#mousehover').invoke('show')
       cy.contains('Top').click({force:true})

    })
    
})