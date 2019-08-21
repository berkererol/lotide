const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

let result;

// CHECKING FOR THE VALUE
const findKeyByValue = function (obj, val) {
  let arrayOfKeys = Object.keys(obj); // Declare and assing an array of keys from the 'obj'
  for (let item of arrayOfKeys) { 
    if (obj[item] === val) { // Check if the value of the keys of the obj correspond to the value
      result = item
    }
  }
  return result
}


findKeyByValue(bestTVShowsByGenre, "The lolita");

console.log(result);
