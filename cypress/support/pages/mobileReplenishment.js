export class mobilePhoneReplenishment {
typePhoneNumper(phoneNumber){
    cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
    }

typeAmount(typeamount) {
    cy.get('[data-qa-node="amount"]')
        .type(typeamount)
    }

checkDebitCard(debitcard) {
    cy.get('[data-qa-node="card"]')
      .should('have.text', debitcard)
    }

chceckDebitAmount(debitAmount) {
    cy.get('[data-qa-node="amount"]')
      .should('have.text', debitAmount)
    }

chceckDebitAmountAndComission (debitComission) {
    cy.get('[data-qa-node="commission"]')
      .eq(1)
      .should('contain.text', debitComission)
    }

checkReceiverAmount(receiverAmount) {
    cy.get('.amount')
        .find("span")
        .should("have.text", receiverAmount)
    }

checkPaymentCurrency(paymentCurrency) {
    cy.get(".amount")
        .find("small")
        .should('contain.text', "UAH")
    }
    
}
export const mobileReplenishment = new mobilePhoneReplenishment()

