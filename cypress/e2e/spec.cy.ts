describe('App Title Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('ng-dashboard')
  })
})
