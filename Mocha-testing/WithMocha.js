var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var checkResults = "hello";

var arr = [1, 2, 3, 4];
var obj = { name: "jack" };
// assert.isEmpty(arr, "not empty");

expect(arr).to.be.an("array").that.includes(5);
// assert.isString(checkResults, "not a string");
// assert.isArray(arr, "not a Array");
// assert.isObject(obj, "not a Object");
// describe("testing my function ", () => {
//   beforeEach(() => {
//     checkResults = 0;
//   });
//   it("Should show results", () => {});
// });
