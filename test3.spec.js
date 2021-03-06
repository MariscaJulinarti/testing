describe('Test profes.io', () => {
    it('Create Assesments', () => {
       cy.visit('https://dev-company.profesi.io')
       cy.get('input[placeholder=Email]')
          .type('recruitmentqaprofesi@yopmail.com')
          .should('have.value', 'recruitmentqaprofesi@yopmail.com')
       cy.get('input[name=password]')
          .type('Qapr0fes1')
          .should('have.value', 'Qapr0fes1')
       cy.get('button[type=submit]').click()
    })
    it('Buat Asesmen', () => {
       //cy.pause()
       cy.wait(5000)
       cy.contains('Judul Asesmen').click()
       cy.get('input[name=text]')
          .type('Risca')
          .should('have.value', 'Risca')
       cy.get('input[class=vdp-datepicker__calendar]')
          .type('11 May 2022')
          .should('have.value', '11 May 2022')
       cy.get('input[class=vdp-datepicker__calendar]')
          .type('31 May 2022')
          .should('have.value', '31 May 2022')
      cy.get('button[type=submit]').click()
      cy.contains('Back to Home').click()
      cy.wait(5000)
    })
 })