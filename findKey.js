const findKey = function (obj, callback) {
  let result;
  let arrayOfObjects = Object.entries(obj); // Declare and assing an array of keys from the 'obj'
  for (const [key, value] of arrayOfObjects) { 
    if (callback(value)) { // Check if the value of the keys of the obj correspond to the value
      result = key
      break
    }
  }
  return console.log(result)
}

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

