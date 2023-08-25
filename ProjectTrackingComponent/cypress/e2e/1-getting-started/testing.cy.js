function Login() {
  cy.get("#login").click();

  cy.get("#mail").type("dheepaganesh@gmail.com");

  cy.get("#password").type("deepak@13");

  cy.get("#submitButton").click();

  cy.get("#filter").click();
}

describe("Positive Assert", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // Positive Assert

  it("CheckUrlPath", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Check-FormInput-exist-and-Value-is-Empty", () => {
    cy.get("#login").click();

    cy.get('[id*="mail"]').should("exist");

    cy.get('[id*="password"]').should("exist");

    cy.get("#mail").should("have.value", "");

    cy.get("#password").should("have.value", "");
  });

  it("Type-The-Search-Field", () => {
    Login();

    const InputField = cy.get("#input");

    InputField.type("Hello Deepak!");

    InputField.should("have.value", "Hello Deepak!");
  });

  it("Check-the-Option-Length", () => {
    cy.get("#login").click();

    cy.get("#mail").type("dheepaganesh@gmail.com");

    cy.get("#password").type("deepak@13");

    cy.get("#submitButton").click();

    cy.get("#filter").click();

    cy.get(".role").click();

    cy.get(".ant-select-item-option").should("have.length.at.least", 4);
  });

  it("Check-the-SelectTag-Text", () => {
    cy.get("#login").click();

    cy.get("#mail").type("dheepaganesh@gmail.com");

    cy.get("#password").type("deepak@13");

    cy.get("#submitButton").click();

    cy.get("#filter").click();

    cy.contains(".status", "Select options").click();
  });
});

// Negative Assert

describe("Negative Assert", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("CheckUrlPath-NotExist", () => {
    cy.url().should("not.eq", "http://localhost:300");
  });

  it("CheckInput-Not-Have", () => {
    cy.get("#login").click();
    cy.get("#mail").should("not.have.value", "mail");
    cy.get("#password").should("not.have.value", "mail");
  });

  it("InputTyped-Not-Have", () => {
    Login();
    const InputField = cy.get("#input");
    InputField.type("Hello Kumar");
    InputField.should("not.have.value", "Hello Kumar!");
  });

  it("Option-Length-NotExist", () => {
    Login();
    cy.get(".role").click();
    cy.get(".ant-select-item-option").should("not.have.length", 11);
  });

  it("Wrong-SelectTag-Text", () => {
    Login();
    cy.contains(".status", "select Myoption").should("not.exist");
  });
});

describe("Function Positive Assert", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check Role Is Toggled", () => {
    Login();
    cy.get(".role").click();

    cy.get(".ant-select-item-option")
      .contains("Listing Manager")
      .type("{downarrow}{enter}");

    cy.get("#selectedrole").should("exist");
  });

  it("Check Status Is Toggled", () => {
    Login();

    cy.get(".status").click();

    cy.get(".ant-select-item-option").contains("Activated").click();

    cy.get("#selectedstatus").should("exist");
  });

  it("Check Clear Functionality is working", () => {
    Login();
    cy.get(".role").click();

    cy.get(".ant-select-item-option")
      .contains("Listing Manager")
      .type("{downarrow}{enter}");

    cy.get("#selectedrole").should("exist");

    cy.get(".status").click();

    cy.get(".ant-select-item-option").contains("Activated").click();

    cy.get("#selectedstatus").should("exist");

    cy.get("#filter_clear").click();

    cy.get("#selectedrole").should("not.exist");

    cy.get("#selectedstatus").should("not.exist");
  });

  it("Check the Role Remove is Working", () => {
    Login();
    cy.get(".role").click();

    cy.get(".ant-select-item-option")
      .contains("Tier Manager")
      .type("{downarrow}{enter}");

    cy.get('svg[data-icon="close"]').click();
    cy.get("#selectedrole").should("not.exist");
  });
});
