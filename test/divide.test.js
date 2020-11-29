const divide = require("../index");
const chai = require("chai");
const expect = chai.expect;

describe("Divide function", () => {
  it("should divide positive intergers correctly", () => {
    const a = 8;
    const b = 4;
    const expectedAnswer = 2;

    const actualAnswer = divide(a, b);
    expect(actualAnswer).to.equal(expectedAnswer);
  });
  it("should throw an error when divide by zero", () => {
    const a = 8,
      b = 0;
    const fn = () => {
      divide(a, b);
    };

    expect(fn).to.throw();
  });
});
