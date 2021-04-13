///  <reference types="Cypress" /> 
it('type', () => {
      cy.viewport(1800, 700)
      cy.visit('https://test.buildgcp.com/login')
      .get('[name="login"]')
      .type('test-user')
})

it('check is correct URL', () => {
      cy.viewport(1800, 700)
      cy.visit('https://test.buildgcp.com/login')
      cy.url()
      .should('eq', 'https://test.buildgcp.com/login')
      
})  


it('focus', () => {
      cy.viewport(1800, 700)
      .visit('https://test.buildgcp.com/login')
      .get('[name="login"]')
      .focus()
      
})  

it('blur', () => {
      cy.viewport(1800, 700)
      .visit('https://test.buildgcp.com/login')
      .get('[name="login"]')
      .focus()
      .blur()
      
})  

it('clear', () => {
      cy.viewport(1800, 700)
      .visit('https://test.buildgcp.com/login')
      .get('[name="login"]')
      .type('User-Test')
      .wait(5000)
      .clear()

})   
it('submit', () => {
      cy.viewport(1800, 700)
      .visit('https://test.buildgcp.com/login')
      .get('form[class="jss6"]')
      .submit()

})   
  

it('click', () => {
      cy.viewport(1800, 700)
      .visit('https://test.buildgcp.com/login')
      .get('span[class="MuiButton-label jss21"]')
      .click()

})   

it('rightclick', () => {
      cy.viewport(1800, 700)
      .visit('https://example.cypress.io/commands/actions')
      .contains('Right click to edit')
      .rightclick()

})   

it('dbclick', () => {
      cy.viewport(1800, 700)
      .visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_samples_/Examples')
      .contains('My Card')
      .dblclick()

})   
  

it('check', () => {
      cy.viewport(1800, 700)
      .visit('https://www.facebook.com/reg/')
      .get('input[value="2"]')
      .check()

})  

it('uncheck', () => {
      cy.viewport(1800, 800)
      .visit('https://en.privatbank.ua/')
      .get('#switch-input')
      .check({force: true})
      .wait(4000)
      .uncheck({force: true})

})  

it('select', () => {
      cy.viewport(1800, 800)
      .visit('https://www.facebook.com/r.php?locale=en_US&display=page')
      .get('#month')
      .select('Jul')
      .get('#day')
      .select('29')
      .get('#year')
      .select('1985')
      
})  

it('scroll', () => {
      cy.viewport(1800, 700)
      .visit('https://next.privat24.ua/')
      .get('[data-qa-node="lang"]')
      .wait(2000)
      .scrollIntoView()

})  
it('cy.scroll', () => {
      cy.viewport(1800, 700)
      .visit('https://next.privat24.ua/')
      .wait(2000)
      cy.scrollTo(0, 500)

})  

it.only('check', () => {
      cy.viewport(1800, 700)
      .visit('https://next.privat24.ua/?lang=en')
      .wait(3000)
      .contains('Services')
      .wait(3000)
      .trigger('mouseover')

})  