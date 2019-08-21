// VERIFICATION FUNCTIONS
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

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

// MAIN FUNCTION

const flatten = function(arr) {
  var myNewArray = [].concat.apply([], arr);
  return myNewArray;
}

let Array1 = [1, 2, [3, 4], 5, [6]];

console.log(eqArrays(flatten(Array1), [1, 2, 3, 4, 5, 6])); // prints true


