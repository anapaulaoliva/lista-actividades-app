describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.wait(10_000)
    cy.get('h1', {timeout: 1000}).should('contain', 'Lista de Actividades');
    cy.contains('Agregar').click()
  })
})