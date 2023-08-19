describe("WebApp Testing", () => {
  beforeEach(() => {

    cy.visit("http://localhost:3000");
    
  });


  // Positive Test

  it('Check-FormInput-exist-and-Value-is-Empty',()=>{
    cy.get('#login').click();

    cy.get('[id*="mail"]').should("exist");

    cy.get('[id*="password"]').should("exist");

    cy.get("#mail").should('have.value','');

    cy.get("#password").should('have.value','');

  })


  it("Type-The-Search-Field", () => {
    cy.get("#login").click();

    cy.get("#mail").type('dheepaganesh@gmail.com');

    cy.get('#password').type('deepak@13');

    cy.get('#submitButton').click();

    cy.get("#filter").click();

    const InputField = cy.get("#input");

    InputField.type("Hello Deepak!");

    InputField.should("have.value","Hello Deepak!")

  });

  it("Check-the-Option-Length",()=>{
    cy.get("#login").click();

    cy.get("#mail").type('dheepaganesh@gmail.com');

    cy.get('#password').type('deepak@13');

    cy.get('#submitButton').click();

    cy.get("#filter").click();

    cy.get('.role').click();

    cy.get('.ant-select-item-option').should('have.length.at.least',4);
  })

  it("Check-the-SelectTag-Text",()=>{

    cy.get("#login").click();

    cy.get("#mail").type('dheepaganesh@gmail.com');

    cy.get('#password').type('deepak@13');

    cy.get('#submitButton').click();

    cy.get("#filter").click();

    cy.contains('.status', 'Select options').click();
  
  })
});


// Negative Test

it("WrongInput",()=>{

cy.get("#input").click();

cy.get("#mail").should("have.value","mail")

cy.get("#password").should("have.value","mail")

})

it("WrongInputTyped",()=>{
    cy.get("#login").click();

    cy.get("#mail").type('kumar@gmail.com');

    cy.get('#password').type('kumar123');

    cy.get('#submitButton').click();

    cy.get("#filter").click();

    const InputField = cy.get("#input");

    InputField.type("Hello Kumar");

    InputField.should("have.value","Hello Kumar!")
})

it("Wrong-Option-Length",()=>{
  cy.get("#login").click();

  cy.get("#mail").type('ashok@gmail.com');

  cy.get('#password').type('ashok987');

  cy.get('#submitButton').click();

  cy.get("#filter").click();

  cy.get('.role').click();

  cy.get('.ant-select-item-option').should('have.length.at.most',5);
})


it("Wrong-SelectTag-Text",()=>{

  cy.get("#login").click();

  cy.get("#mail").type('vinoth@gmail.com');

  cy.get('#password').type('vinoth352');

  cy.get('#submitButton').click();

  cy.get("#filter").click();

  cy.contains('.status', 'select Myoption').click();

})

