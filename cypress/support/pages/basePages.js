export class BasePages {

open(url) {
    cy.visit(url)
    }       
    
typeAmount(typeamount) {
    cy.get('[data-qa-node="amount"]')
        .type(typeamount)
    }
    
typeDebitCardData(cardNumber, expDate, cvv){
    cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expDate)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
    }
submitPayment () {
    cy.get('[type="submit"]')
        .click()
    }




}



export const basePages = new BasePages()