// HELPER FUNCTION DEFINITION TO VERIFY ARRAY EQUALITY
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false
  }
  return true
}


// MAIN FUNCTION TO CHECK KEY VALUE EQUALITY IN TWO OBJECTS
const eqObjects = function (object1, object2) {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);
  if (keyArray1.length !== keyArray2.length) {
    return false
  }
  for (let item of keyArray1) {
    if (Array.isArray(object1[item]) && A===rray.isArray(object2[item])) {
      eqArrays(object1[item], object2[item]) ? true : false;
      return
    } else if (object1[item] !== object2[item]) {
      return false
    }
  }
  return true
}


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected) === true) {
    const inspect = require('util').inspect;
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} = ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
}

// CHECK
let A = { a: '1', b: 2 } 
let B = { b: 2, a: '1' }
assertObjectsEqual(A, B); // returns PASS