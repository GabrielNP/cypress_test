describe('My first test', function(){
       /* ****  Script   ****
        Arange - setup initial app state
            - visit a web page
            - query for an element
        Act - take an action
            - interact with that element
        Assertion - make an assertion (afirmação) = Assertions describe the desired state of your elements, your objects, and your application
            - make an assertion about page content
        */

    it('Arrange', function(){
                                                // no setup initial

        cy.visit('http://example.cypress.io')   // visit a web page
        cy.pause()                              // pause to debug, it will run until first '}'
        cy.contains('type')                     // query for an element
    })

    it('Action', function(){
        cy.contains('type').click()             // take an action: click an element
        // interact with that element

        cy.url()                                // get the current URL of the page
          .should('include','/commands/actions')// create an assertion
    })

    it('Assertion', function(){
        cy.get('.action-email')                 // get DOM elements by selector or alias
          .type('fake@email.com')               // type into a DOM element
          .should('have.value','fake@email.com')// make an assertion with parameter that expect determinate value
    })
   

});