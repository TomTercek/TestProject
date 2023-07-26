it('user should be able to log in', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
  
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  
    cy.get('.oxd-button').click()
  
  
  
  
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') //assertion
  
    cy.get('.oxd-userdropdown-tab').click()
  
    cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
  
    cy.get('.oxd-dialog-close-button').select()

})