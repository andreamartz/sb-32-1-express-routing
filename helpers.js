const ExpressError = require('./expressError');

function convertAndValidateNumsArray(numsAsStrings) {
  nums = numsAsStrings.map(num => Number(num));
  let idx = nums.findIndex(num => Number.isNaN(num))
  console.log("idx: ", idx);
  if (idx >= 0) {
    return new Error(`${numsAsStrings[idx]} is not a number.`);
  }
  console.log("nums from convert...: ", nums);
  return nums;
}

function mean(nums) {
  // use reduce array method
  value = nums.reduce((a, b) => (a + b)) / nums.length;
  return value;
}

module.exports = {
  convertAndValidateNumsArray: convertAndValidateNumsArray,
  mean: mean,
}

// module.exports = {
//   mean: mean,
//   median: median,
//   mode: mode
// }


