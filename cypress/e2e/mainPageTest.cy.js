import selector from "../fixtures/selectors";

describe("Correctness of the main page display", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows correct title", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
  });

  it("Shows 7 weekdays", () => {
    cy.get(selector.weekday).should("have.length", 7);
  });

  it("Shows section of movies", () => {
    cy.get(selector.movieSection).should("be.visible");
  });
});
