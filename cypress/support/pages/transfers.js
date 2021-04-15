export class Transfers {
    
    typeDebitNameAndSurname(name, surname){
    cy.get('input[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('input[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }
 

    typeDebitReceiverCard(NumberCard) {
    cy.get('input[data-qa-node="numberreceiver"]')
            .type(NumberCard)
    }

    typeReceiverNameAndSurname(name, surName) {
    cy.get('input[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('input[data-qa-node="lastNamereceiver"]')
            .type(surName)
    
    }

    typeClickComment(typecoment) {
    cy.get('span[data-qa-node="toggle-comment"]')
            .click()
            .get('textarea[data-qa-node="comment"]')
            .type(typecoment)
    }

    checkDebitAndReceiverCards (debitcard, receivercard) {
    cy.get('span[data-qa-node="payer-card"]')
            .should('have.text', debitcard)
            .get('span[data-qa-node="receiver-card"]')
            .should('have.text', receivercard)
    }

    checkDebitAmountAndTotalCards(debitAmount, receiverCard) {
    cy.get('div[data-qa-node="receiver-amount"]')
            .should('have.text', debitAmount)
            .get('[data-qa-node="total"]')
            .find('span')
            .should('contain.text', receiverCard)
    }   

    checkDebitComission(comission) {
    cy.get('div[data-qa-node="payer-currency"]')
            .should("have.text", comission)
    }

    checkTotalCurrency(currency){
    cy.get('[data-qa-node="total"]')
            .find('small')
            .should('contain.text', currency)
    }

    checkComment(comment) {
    cy.get('[data-qa-node="comment"]').eq(0)
            .should("contain.text", comment)
    }



}

export const transferstion = new Transfers()