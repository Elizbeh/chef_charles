describe("Chef Charles App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("loads the homepage", () => {
    cy.contains("Chef Charles").should("be.visible");     
  });

  it("allows user to type ingredients", () => {
    cy.get('input[name="ingredient"]')
      .type("chicken")
      .should("have.value", "chicken");
  });

  it("shows loading state when requesting a recipe", () => {
    // Add enough ingredients for the button to appear
    cy.get('input[name="ingredient"]').type("chicken{enter}");
    cy.get('input[name="ingredient"]').type("lemon{enter}");
    cy.get('input[name="ingredient"]').type("garlic{enter}");

    cy.contains("Get a recipe").click();

    cy.contains(/Generating your recipe/i).should("exist");
  });

  it("displays a recipe from the AI response (mocked)", () => {
    // Mock the API response
    cy.intercept("POST", "/api/recipe", {
      statusCode: 200,
      body: {
        recipe:
          "### Lemon Garlic Chicken\n\n- Chicken\n- Lemon\n- Garlic\n\nA recipe generated for testing."
      }
    }).as("recipeCall");

    // Add 3 ingredients so the button shows
    cy.get('input[name="ingredient"]').type("chicken{enter}");
    cy.get('input[name="ingredient"]').type("lemon{enter}");
    cy.get('input[name="ingredient"]').type("garlic{enter}");

    cy.contains("Get a recipe").click();
    cy.wait("@recipeCall");

    cy.contains("Lemon Garlic Chicken").should("be.visible");
    cy.contains("A recipe generated for testing.").should("be.visible");
  });

});
