describe('The Home Page', function() {

	/*beforeEach(function () {
    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')
    
    cy.request('POST', '/auth/login', { username: 'gabriel.novaes@tblmanager.com', password: 'Lorena800tbl' })
      .its('body')
      .as('currentUser')
  })

	it('successfully loads', function() {
	    cy.visit('/') // root directory definied in cypress.json file. This will automatically prefix cy.visit() and cy.request() commands. 
  	})

  	it('sets auth cookie when logging in via form submission', function () {
	    // destructuring assignment of the this.currentUser object
    	const { username, password } = this.currentUser

	    cy.get('input[name=email]').type('gabriel.novaes@tblmanager.com')

	    cy.contains('Continue').click()

	    cy.wait(3000)

	    // {enter} causes the form to submit
	    cy.get('input[name=password]').type(${password}{enter})

	    // we should be redirected to /dashboard
	    cy.url().should('include', '/dashboard')

	    // our auth cookie should be present
	    cy.getCookie('your-session-cookie').should('exist')

	    // UI should reflect this user being logged in
	    cy.get('h1').should('contain', 'gabriel.novaes@tblmanager.com')
  	})*/

  	it('Login', function(){
  		cy.visit('/')
  		cy.get('input[name=email]').type('gabriel.novaes@tblmanager.com')
  		cy.contains('Continue').click()
  		cy.get('input[name=password]').type('Lorena800tbl')
  		cy.get('.btn').click()
  		cy.url()
  			.should('include', '/reports')
  	})

  	it('Navigate to dashboard', function(){
  		var $dashboardButton = Cypress.$('ul.menu a').eq(1).attr('href')
  		cy.wrap($dashboardButton).click()
  	})
})