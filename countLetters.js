const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

const countLetters = function (string) {
  const count = {};
  for (let letter of string) {
    if (count[letter]) {
      count[letter] += 1
    } else {
      count[letter] = 1
    }
  }
  return count
}

console.log(countLetters("BERKER")); // prints { B: 1, E: 2, R: 2, K: 1 }

let A = { B: 1, E: 2, R: 2, K: 1 }
assertEqual(countLetters("BERKER"), A);
