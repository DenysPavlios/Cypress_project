///  <reference types="Cypress" /> 

// describe('Mobile phone replenishment', () => {

//     context('Replenishment less than the allowed amount',() => {
//         it('show error: Minimum amount of the replenishment 1 UAH', () => {});
//       });

// });

//  it('By ID', () => {
//    cy.visit('https://www.translate.ru/')
//    cy.get('#sourceText')  //id осуществляеься поиск при помощи # 
//  });

//  it('By Class', () => {
//     cy.visit('https://test.buildgcp.com/login')
//     cy.get('.MuiTouchRipple-root')   //class осуществляеься поиск при помощи точки . 
//   });

//  it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//     cy.get('nav')   //Tag осуществляеься поиск при помощи ' ' без спец символов 
//   });

//  it('By Tag value', () => {
//     cy.visit('https://test.buildgcp.com/login')
//     cy.get('[name="login"]')   //Tag value(значения атрибута) осуществляеься поиск при помощи [] 
//   });
  
//   it('By different Tag Types', () => {
//     cy.visit('https://rozetked.me/reviews/14316-zdravstvuy-m1-nedelya-s-macbook-pro-13')
//     cy.get('[type="search"][class="tt-input"]')   //по разным (несколько) атрибутам со значениями осуществляеься поиск при помощи [][] 
//   });

//   it('By different Types', () => {
//     cy.visit('https://www.cypress.io/about/')
//     cy.get('button[type="button"][class="close-top-banner-btn"]')   //по Тегам + разным атрибутам со значениями (несколько) осуществляеься поиск при помощи tag[][] 
//   });

//   it('By Contains name', () => { 
//     cy.visit('https://next.privat24.ua/')
//     cy.get('a[href*="/addcard/digital"]')   //правильно
//     // cy.get('//a[contains(@href, "/addcard/digital")]')  //xpath
//     // cy.get('button:contains("Переглянути картки")')  //правильно
//     // cy.get('button[text()="Переглянути картки"]')  //xpath
//        cy.get('*[class^="card"]')                    // поиск по названию значения в классах
//   });
// it('Using get with Find and Eq', () => {
//       cy.visit('https://next.privat24.ua/deposit/open')
//       cy.get('tdbody').find('td').find('div').find('button').eq('0')   // .find по тегам скачет,eq- по массиву индекс от 0 до ..
// });
//Git commit

it.only('Using get with Find and Eq', () => {
      cy.viewport(1800, 700)
      cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
      cy.get('nav ul li a')
});