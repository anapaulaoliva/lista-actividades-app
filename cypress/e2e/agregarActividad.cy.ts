import { e2e } from '../support/constantes';

describe('Agregar una Actividad', () => {
    it('Verificar que se puede agregar una actividad a la lista', () => {
    // Visitar la pagina principal
      cy.visit('/')
      //cy.wait(10_000)
      //cy.get(e2e.TITULO_PRINCIPAL).should('contain', 'Lista de Actividades');
      //cy.get(e2e.SUBTITULO).should('contain', 'Agregar Actividad');
      //cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD)
        //.should('be.visible')
        //.and('attr', 'value', '');
      //cy.get(e2e.BOTON_AGREGAR)
        //.should('be.visible')
        //.should('has.css', 'background-color', 'rgb(40, 167, 69)');
    cy.validacionInicial()

    //Agregar una actividad
      cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad')
      cy.get(e2e.BOTON_AGREGAR).click();

      cy.get('[data-cy="oWTz10"]').should('have.text', 'Actividad');
    })
  })
