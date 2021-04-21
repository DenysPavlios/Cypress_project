///  <reference types="Cypress" /> 

import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transferstion } from "../support/pages/transfers"
import { basePages } from "../support/pages/basePages"

it.skip('Replenishment', () => {
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




it.skip('Money transfer between foreign card', () => {
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

//Example GET request
it.skip("Example sending the GET request", () => {
      cy.request("https://next.privat24.ua").then((response) => {
            console.log(response);
      });
});




//Example HTTP POST request with EXPECT verification of response
it.skip("Example sending the POST request", () => {
      const requestBody = {
            action: "info",
            phone: "+380686979712",
            amount: 50,
            currency: "UAH",
            cardCvv: "111",
            card: "4552331448138217",
            cardExp: "0526",
            xref: "342ebba3481817e818283991000e834e",
            _: 1619002090817
      };

      const headersData = {
            cookie:
                  'pubkey=5828a37c4587007c958a88b38148c03c; _ga=GA1.2.90593845.1619002008; _gid=GA1.2.28626135.1619002008; lfp=4/21/2021, 1:47:05 PM; pa=1619002025730.86910.25437092123713456next.privat24.ua0.5760897457984062+1; fp=2',
      };

      cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",
            body: requestBody,
            headers: headersData,
      }).then((response) => {
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')
            // цикл  - пробежиться по всем вложеностям
            // expect(response.body.data[i]).to.have.property('amount').to.equal('50.0')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')
            console.log(response);
      });
});


//Example HTTP POST request with SHOULD verification of response
it("Example sending the POST request", () => {
      const requestBody = {
            action: "info",
            phone: "+380686979712",
            amount: 50,
            currency: "UAH",
            cardCvv: "111",
            card: "4552331448138217",
            cardExp: "0526",
            xref: "342ebba3481817e818283991000e834e",
            _: 1619002090817
      };

      const headersData = {
            cookie:
                  'pubkey=5828a37c4587007c958a88b38148c03c; _ga=GA1.2.90593845.1619002008; _gid=GA1.2.28626135.1619002008; lfp=4/21/2021, 1:47:05 PM; pa=1619002025730.86910.25437092123713456next.privat24.ua0.5760897457984062+1; fp=2',
      };

      cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",
            body: requestBody,
            headers: headersData,
      }).its('body').should('contain', {
            status: 'success'
      }).its('data').should('contain', {
            status: 'ok'
      })
});

