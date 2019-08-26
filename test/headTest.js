// const head = require('../head');
// const assertEqual = require('../assertEqual');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  
  beforeEach(function(){
    console.log('see.. this function is run EACH time')
  });

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => { 
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

  });

});