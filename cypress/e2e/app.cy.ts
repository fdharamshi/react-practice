/// <reference types="cypress" />

it("End-to-end test", async () => {

  // Visit the URL (Base URL specified in cypress.config.ts)
  cy.visit("/")

  // Check if everything is rendered correctly.
  cy.get("[data-testid=btn-draw]").should("exist");
  cy.get("[data-testid=btn-shuffle]").should("exist");
  cy.get("[data-testid=btn-reset]").should("exist");
  cy.get("[data-testid=remaining-cards]").contains("52");

  // Card only shows up after drawing the first card
  cy.get('[data-testid=card-wrapper]').should('not.exist');
  const btnDraw = cy.get("[data-testid=btn-draw]").click();
  cy.get('[data-testid=card-wrapper]').should('exist');

  // Draw all the cards
  for (let i = 1; i <= 51; i++) {
    cy.wait(100);
    const btnDraw = cy.get("[data-testid=btn-draw]").click();

    // Check if remaining number of cards is being updated correctly.
    cy.get("[data-testid=remaining-cards]").contains(51 - i);
  }

  // Check if the buttons to shuffle and draw get disabled once all the cards are drawn
  cy.get("[data-testid=remaining-cards]").contains("0");
  cy.get("[data-testid=btn-draw]").should("be.disabled");
  cy.get("[data-testid=btn-shuffle]").should("be.disabled");

  // Press the reset button.
  cy.get("[data-testid=btn-reset]").click();
  cy.get('[data-testid=card-wrapper]').should('not.exist');
  cy.get("[data-testid=remaining-cards]").contains("52");
  cy.get("[data-testid=btn-draw]").should("be.enabled");
  cy.get("[data-testid=btn-shuffle]").should("be.enabled");

  // Testing shuffle - Shuffle should keep the remaining number of cards as it is.
  for (let i = 1; i <= 26; i++) {
    cy.wait(100);
    const btnDraw = cy.get("[data-testid=btn-draw]").click();
  }
  cy.get("[data-testid=remaining-cards]").contains("26");
  cy.get("[data-testid=btn-shuffle]").click();
  cy.get("[data-testid=remaining-cards]").contains("26");
});