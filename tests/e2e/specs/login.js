// https://docs.cypress.io/api/introduction/api.html

describe('Login', () => {
  it('Visits the login url', () => {
    cy.visit('#/login')
    cy.contains('h1', 'Sign in')
  })
  it('should login', () => {
    cy.visit('#/login')
    cy.get('#emailField').type('kmlkm@klmlk.ded')
    cy.get('#passwordField').type('klmlkmlk')
    cy.server()
    cy.route({
      method: 'POST',
      url: '/api/users/login',
      response: {
        "user": {
          "email": "kmlkm@klmlk.ded",
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzAyNzEsInVzZXJuYW1lIjoibW1sa2xrIiwiZXhwIjoxNTc2ODMyNDc5fQ.Up2B8Y0Xvwk6r4mHXqzptegXeOTzyjFcN775Ucx78mo",
          "username": "mmlklk",
          "bio": "I work at statefarm",
          "image": null
        }
      }
    })
    cy.get('.btn-primary').click()
    cy.wait(10000)
    cy.contains('.dropdown-toggle', 'mmlklk')
  })
})
