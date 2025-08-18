
describe('CSSLocators',()=>{

    it("CSS Locators",()=>{

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get("#search_query_top").type("T-Shirts")//id and tg is optional

        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("T-Shirts") //Assertion

    })
    
})