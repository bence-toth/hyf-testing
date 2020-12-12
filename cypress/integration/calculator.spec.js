/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Renders the title and subtitle', () => {
    cy.get("h1")
      .contains("Calculator")
      .should('exist')
    cy.get("h2")
      .contains("Add two numbers here")
      .should('exist')
  })

  it('Renders calculates the sum of 0 + 10 correctly', () => {
    cy.get("[data-testid=number1]")
      .should('exist')
      .clear()
      .type("{rightarrow}0")
    cy.get("[data-testid=number2]")
      .should('exist')
      .clear()
      .type("{rightarrow}10")
    cy.get("[data-testid=sum]")
      .contains(10)
      .should('exist')
  })

  it('Renders calculates the sum of 10 + 10 correctly', () => {
    cy.get("[data-testid=number1]")
      .should('exist')
      .clear()
      .type("{rightarrow}10")
    cy.get("[data-testid=number2]")
      .should('exist')
      .clear()
      .type("{rightarrow}10")
    cy.get("[data-testid=sum]")
      .contains(20)
      .should('exist')
  })

  it('Renders calculates the sum of 10 + 20 correctly', () => {
    cy.get("[data-testid=number1]")
      .should('exist')
      .clear()
      .type("{rightarrow}10")
    cy.get("[data-testid=number2]")
      .should('exist')
      .clear()
      .type("{rightarrow}20")
    cy.get("[data-testid=sum]")
      .contains(30)
      .should('exist')
  })

  it('Renders calculates the sum of 10 + -30 correctly', () => {
    cy.get("[data-testid=number1]")
      .should('exist')
      .clear()
      .type("{rightarrow}10")
    cy.get("[data-testid=number2]")
      .should('exist')
      .clear()
      .type("{leftarrow}-30{rightarrow}{backspace}")
    cy.get("[data-testid=sum]")
      .contains(-20)
      .should('exist')
  })

  it('Calculation works on a mobile screen as well', () => {
    cy.viewport(320, 760);
    cy.get("[data-testid=number1]")
      .should('exist')
      .clear()
      .type("{rightarrow}10")
    cy.get("[data-testid=number2]")
      .should('exist')
      .clear()
      .type("{leftarrow}-30{rightarrow}{backspace}")
    cy.get("[data-testid=sum]")
      .contains(-20)
      .should('exist')
  })
})
