const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


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


const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) == true) {
    console.log("The arrays are equal.")
  } else {
    console.log("The arrays are not equal.")
  }
}

assertArraysEqual(results1, words.map(item => item[0])) // rtturns 'the arrays are equal'

