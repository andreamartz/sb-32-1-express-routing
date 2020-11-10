const express = require('express');
const app = express();
const { convertAndValidateNumsArray, mean, median } = require('./helpers');
const ExpressError = require('./expressError');


app.get('/mean', function(req, res, next) {
  const operation = "mean";
  try {
    // if no nums query key was passed
    if (!req.query.nums) {
      throw new ExpressError("nums are required", 400);
    }
    // create an array of strings, splitting on commas
    let numsAsStrings = (req.query.nums).split(',');

    // check if there are non-numbers in the array
    nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message, 400);
    };

    // do operation and save result as 'value'
    const value = mean(nums);
    const result = {operation, value};
    return res.json(result);
  } catch (err) {
    next(err);
  }
});


app.get('/median', function(req, res, next) {
  const operation = "median";
  try {
    // if no nums query key was passed
    if (!req.query.nums) {
      throw new ExpressError("nums are required", 400);
    }
    // create an array of strings, splitting on commas
    let numsAsStrings = (req.query.nums).split(',');

    // check if there are non-numbers in the array
    nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message, 400);
    };

    // do operation and save result as 'value'
    const value = median(nums);
    const result = {operation, value};
    return res.json(result);
  } catch (err) {
    next(err);
  }
});
// app.get('/mode', function(req, res) {
//   const operation = "mode";
//   const {nums} = req.query;
//   // do operation and save result as 'value'
//   const value = operation(nums);
//   const result = {operation, value};
//   return res.json();
// });

app.get('/mode', function(req, res, next) {
  const operation = "mode";
  try {
    // if no nums query key was passed
    if (!req.query.nums) {
      throw new ExpressError("nums are required", 400);
    }
    // create an array of strings, splitting on commas
    let numsAsStrings = (req.query.nums).split(',');

    // check if there are non-numbers in the array
    nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message, 400);
    };

    // do operation and save result as 'value'
    const value = mode(nums);
    const result = {operation, value};
    return res.json(result);
  } catch (err) {
    next(err);
  }
});


// 404 handler: runs when no other route is matched
// Does NOT match next(err) bc there are not 4 parameters
app.use(function(req, res, next) {
  const notFoundErr = new ExpressError("Page Not Found", 404);
  return next(notFoundErr);
});

// Error handler
app.use(function (err, req, res, next) { //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;
  console.log(message);
  // set the status and alert the user
  // return res.status(status).json({
  //   error: { message, status }
  // });
  return res.status(status).send(message);
});


// keep this at bottom of file
app.listen(3000, function () {
  console.log('App on port 3000');
})