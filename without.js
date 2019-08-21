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

const without = function (source, itemsToRemove) {
  return source.filter(function (item) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (item === itemsToRemove[j]) {
        return false
      }
    }
    return true
  })
}

console.log(without([1, 1, 2, 3, 5, 1, 4, 5, 6], [3, 1]));


