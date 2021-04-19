///  <reference types="Cypress" /> 

import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transferstion } from "../support/pages/transfers"
import { basePages } from "../support/pages/basePages"

it.only('Replenishment', () => {
      basePages.open('https://next.privat24.ua/mobile?lang=en')
      mobileReplenishment.typePhoneNumper('686979712')
      basePages.typeAmount('1')
      basePages.typeDebitCardData('4552331448138217', '0524', '111')
      cy.wait(3000)
      basePages.submitPayment()
      mobileReplenishment.checkDebitCard('4552 **** **** 8217')
      mobileReplenishment.chceckDebitAmount('1')
      mobileReplenishment.chceckDebitAmountAndComission('2') 
      mobileReplenishment.checkReceiverAmount('1')
      mobileReplenishment.checkPaymentCurrency('UAH')
});




      it('Money transfer between foreign card', () => {
      cy.viewport(1800, 700)
      basePages.open('https://next.privat24.ua/money-transfer/card?lang=en')     
      basePages.typeDebitCardData('4552331448138217', '0524', '111')
      transferstion.typeDebitNameAndSurname('Shayne', 'McConnelly')
      transferstion.typeDebitReceiverCard('5309233034765085')
      transferstion.typeReceiverNameAndSurname('Juliana', 'Janssen')
      basePages.typeAmount('300')
      transferstion.typeClickComment('Cypress test')
      cy.wait(2000)
      basePages.submitPayment()
      transferstion.checkDebitAndReceiverCards('* 8217', '* 5085')
      transferstion.checkDebitAmountAndTotalCards('300 UAH', '388.87')
      transferstion.checkDebitComission('88.87 UAH')
      transferstion.checkTotalCurrency('UAH')
      transferstion.checkComment('Cypress test')


});






