import { e2e } from '../support/constantes';

describe('Editar una Actividad', () => {
    it('Verificar que se puede editar una actividad existente', () => {
    // Visitar la pagina principal
      cy.visit('/')
      cy.validacionInicial()

    //Agregar una actividad
      cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad')
      cy.get(e2e.BOTON_AGREGAR).click();

      cy.get('[data-cy="oWTz10"]').should('have.text', 'Actividad');
    })
  })
