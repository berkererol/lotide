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
    console.log(`🛑🛑🛑 Assertion Failed`);
    return
  }
  for (let item of keyArray1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      eqArrays(object1[item], object2[item]) ? console.log(`✅✅✅ Assertion Passed`) : console.log(`🛑🛑🛑 Assertion Failed`);
      return 
    } else if (object1[item] !== object2[item]) {
      console.log(`🛑🛑🛑 Assertion Failed`);
      return
    }
  }
  console.log(`✅✅✅ Assertion Passed`);
}


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false