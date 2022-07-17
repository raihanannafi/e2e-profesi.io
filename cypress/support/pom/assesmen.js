export default class Assesmen {
  static visitPage() {
    cy.visit('/assesments/create')
  }

  static getCreateAssesmentSideBarButton() {
    return cy.get('[data-cy="side-nav-assessment-create"]')
  }
  
  static getJudulAssesmenField() {
    return cy.get('.vs-inputx').eq(0)
  }

  static setTanggalDimulaiField() {
    cy.get('[placeholder="Pilih Tanggal Dimulai"]').click()
    cy.get('.today').eq(0).click({ force: true })
  }
  static setTanggalBerakhirField() {
    cy.get('[placeholder="Pilih Tanggal Berakhir"]').click()
    cy.get('.today').eq(1).click({ force: true })
  }
  static getPenilaianDiriSendiriToggle(){
    return cy.get('.input-switch vs-switch--input').eq(0)
  }
  static getFiturKomentarToggle(){
    return cy.get('.input-switch vs-switch--input').eq(1)
  }
  static getGunakanSkorToggle(){
    return cy.get('.input-switch vs-switch--input').eq(2)
  }
  static getCariDaftarJabatanField(){
    return cy.get('.vs-input--input small').eq(0)
  }
  static getCariNamaPegawaiField(){
    return cy.get('.vs-inputx').eq(2)
  }
  static getPegawaiTambahButton(id){
    return cy.get(`[id="btn-add-${id}"]`)
  }
  static setAsesorAtasan(){
    cy.get('.vs-collapse-item--header').eq(0).click()
    cy.get('.open-item > .vs-collapse-item--content > .con-content--item > .vx-row > :nth-child(2) > .checkbox-list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(0px);"] > .item > .vx-card > .vx-card__collapsible-content > .vx-card__body').click()
  }
  static setRekanKerja(){
    cy.get('.vs-collapse-item--header').eq(1).click()
    cy.get('.open-item > .vs-collapse-item--content > .con-content--item > .vx-row > :nth-child(2) > .checkbox-list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(0px);"] > .item > .vx-card > .vx-card__collapsible-content > .vx-card__body').click()
  }
  static setBawahan(){
    cy.get('.vs-collapse-item--header').eq(2).click()
    cy.get('.open-item > .vs-collapse-item--content > .con-content--item > .vx-row > :nth-child(2) > .checkbox-list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(0px);"] > .item > .vx-card > .vx-card__collapsible-content > .vx-card__body').click()
  }
  static getTambahDataAsesiButton(){
    return cy.get('.mt-4 > .content')
  }
  static getSubmitButton(){
    return cy.get('[type="submit"]').contains('Publikasi')
  }
  static getConfirmButton(){
    return cy.get('.vs-dialog-accept-button')
  }
}
