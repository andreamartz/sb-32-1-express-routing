const { mean } = require('./helpers');
const ExpressError = require('./expressError');

describe('find the mean', function() {
  // test('find the mean of 4 numbers in array', function() {
  //   expect(mean([1,3,5,7])).toEqual(4);
  // })
  test('should throw error if string in nums array', function() {
    expect(() => mean(["foo",2,3])).toThrow(ExpressError("nums are required", 400));
  })
  test('should throw error if no nums provided',
  function() {
    expect(() => mean()).toThrow("nums are required");
  })
})