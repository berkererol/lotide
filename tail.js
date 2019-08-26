const tail = function(array) {
  let array2 = [];
  for( let i = 1; i < array.length; i++) {
    array2.push(array[i]);
  }
  return array2;
}

module.exports = tail;

