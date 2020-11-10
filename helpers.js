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

function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function mean(nums) {
  // use reduce array method
  let value;
  value = nums.reduce((acc, cv) => (acc + cv)) / nums.length;
  return value;
}

function median(nums) {
  let length = nums.length;
  let value;
  // sort numbers
  nums.sort((a, b) => a - b);

  if (length === 0) {
    value = 0;
  // if length is odd
  } else if (length % 2 === 1) {
    value = nums[Math.floor(length/2)];
  // if length is even
  } else {
    let num1 = nums[length/2 - 1];
    let num2 = nums[length/2];
    value = mean([num1, num2]);
  }
  return value;
}

function mode(nums) {
  let freqCounter = createFrequencyCounter(nums);
  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}

module.exports = {
  convertAndValidateNumsArray, mean, median, mode
}

// module.exports = {
//   mean: mean,
//   median: median,
//   mode: mode
// }


