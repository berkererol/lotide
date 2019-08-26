const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {

  it("returns ['Lighthouse Labs', 'Labs'] for ['Yo-yo', 'Lighthouse Labs', 'Labs']", () => {
    assert.deepEqual(tail(['Yo-yo', 'Lighthouse Labs', 'Labs']), ['Lighthouse Labs', 'Labs'])
  });

});



