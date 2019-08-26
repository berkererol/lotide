const assert = require('chai').assert;
const middle = require('../middle');

describe('middle testing', () => {

  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
 });




// const testArray1 = [1,2,3,4]; // case where the array length is even (so two numbers are returned)
// assertArraysEqual(middle(testArray1), [2,3]); // expected  PASS

// const testArray2 = [1,2,3,4,5]; // case where the array length is odd.
// assertArraysEqual(middle(testArray2), [3]); // expected PASS


// const testArray3 = [1,2,3,4]; // case where the array length is even (so two numbers are returned)
// assertArraysEqual(middle(testArray3), [3]); // expected  FAIL

// const testArray4 = [1,2,3,4,5]; // case where the array length is odd.
// assertArraysEqual(middle(testArray4), [3,5]); // expected FAIL