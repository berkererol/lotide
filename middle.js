// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) == true) {
    console.log("The arrays are equal.")
  } else {
    console.log("The arrays are not equal.")
  }
}

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length < 3) {
    return []
  } else if (array.length % 2 === 1) {
    return array[Math.floor(array.length / 2)]
  } else if (array.length % 2 === 0) {
    return [array[(array.length/2)-1], array[array.length/2]]
  }
 }

// TEST CODE
console.log(middle([3, 5, 6, 7, 8, 9, 10, 11]));
