const { mean, median, mode, convertAndValidateNumsArray } = require('./helpers');
const ExpressError = require('./expressError');


describe('test convertAndValidateNumsArray', () => {
  test('should return error if an element of numsAsStrings cannot be converted to a number', () => {
    // expect(() => convertAndValidateNumsArray([1,3,5,"foo"])).toHaveReturned(Error);
    expect(convertAndValidateNumsArray([1,3,5,"foo"])).toBeInstanceOf(Error);
  })
  test('should return array of numbers if all elements in numsAsStrings can be converted to numbers', () => {
    expect(convertAndValidateNumsArray(["2","3","4"])).toEqual([2,3,4]);
  })
});

describe('find the mean', () => {
  test('find the mean of 4 numbers in array', function() {
    expect(mean([1,3,5,7])).toEqual(4);
  });
  test('should throw error if NaN in nums array', function() {
    expect(mean([NaN,2,3])).toBeNaN();
  });
});

describe('find the median', () => {
  test('find the median of 4 numbers in array (even length)', function() {
    expect(median([1,3,5,7])).toEqual(4);
  });
  test('find the median of 3 numbers in array (odd length)', function() {
    expect(median([1,3,7])).toEqual(3);
  });
});


describe('find the mode', () => {
  test('find the mode of array (one mode)', function() {
    expect(mode([1,3,7,3,3,9])).toEqual(3);
  });
});
