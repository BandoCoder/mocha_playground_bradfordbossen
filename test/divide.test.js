const sort = require("../index");
const chai = require("chai");
const expect = chai.expect;

describe("Sort Function", () => {
  it("If numbers are already in ascending order, array is not modified", () => {
    expect(sort([1, 2, 3])).to.deep.equal([1, 2, 3]);
    expect(sort([4, 5, 6])).to.deep.equal([4, 5, 6]);
    expect(sort([3, 20, 100])).to.deep.equal([3, 20, 100]);
  });
  it("Sorts numbers in ascending order", () => {
    expect(sort([1, 3, 2])).to.deep.equal([1, 2, 3]);
    expect(sort([3, 1, 2])).to.deep.equal([1, 2, 3]);
    expect(sort([2, 3, 1])).to.deep.equal([1, 2, 3]);
    expect(sort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    expect(sort([1, 100, 20])).to.deep.equal([1, 20, 100]);
    expect(sort([100, 20, 1])).to.deep.equal([1, 20, 100]);
    expect(sort([1, 3, 2, 6, 4, 5])).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
});
