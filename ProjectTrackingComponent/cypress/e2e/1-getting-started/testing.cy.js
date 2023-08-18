describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should add a new todo item", () => {
    cy.get("#power").should("exist");
  });
});
