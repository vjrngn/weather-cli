const isEmpty = require("../isEmpty");

describe("isEmpty()", () => {
  it("an array with no items is considered empty", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("an empty string is considered empty", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("a string with spaces is empty", () => {
    expect(isEmpty(" ")).toBe(true);
  });

  it("calling the function with no arguments is considered empty", () => {
    expect(isEmpty()).toBe(true);
  });

  it("the string 'undefined' is considered empty", () => {
    expect(isEmpty("undefined")).toBe(true);
  });

  it("null is considered empty", () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("an array with values is non-empty", () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});
