import { faker } from '@faker-js/faker';
import Assesmen from '../../support/pom/assesmen'
describe('Assesmen Profesi.io', () => {
    beforeEach(() => {
      cy.auth()
      cy.visit('/')
      Assesmen.getCreateAssesmentSideBarButton().click()
      cy.intercept('/c/assessments/work-units').as('work-units')
      cy.wait('@work-units').then((interception)=> {
        const employees = interception.response.body.data[21].job_titles[0].employees[0]
        return employees
      }).as('employees')
    })

    it('Using valid parameter should succeed publish data and data recorded in daftar assesmen', () => {
      let titleAssesment = faker.name.jobTitle()
      Assesmen.getJudulAssesmenField().type(titleAssesment)
      Assesmen.setTanggalDimulaiField()
      Assesmen.setTanggalBerakhirField()

      cy.get('@employees').then(employees =>
        {
          Assesmen.getCariNamaPegawaiField().type(employees.name)
        })
      cy.get('@employees').then(employees =>
        {
          Assesmen.getPegawaiTambahButton(employees.id).click()
        })
        
      Assesmen.setAsesorAtasan()
      Assesmen.setRekanKerja()
      Assesmen.setBawahan()
      Assesmen.getTambahDataAsesiButton().click()
      Assesmen.getSubmitButton().click()
      Assesmen.getConfirmButton().click()
      
      cy.get('.ag-row-first').should('contain',titleAssesment)
      })
    })