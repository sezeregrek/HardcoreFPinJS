//https://codepen.io/drboolean/pen/OJJOQMx
//==============
const _ = require("ramda");
const split = _.curry((delimiter, string) => string.split(delimiter));

// Exercise 1
//==============

const words = function(str) {
  return split(" ", str);
};

// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

const sentences = xs => _.map(words, xs);

// Exercise 2
//==============
const filterQs = function(xs) {
  return _.filter(function(x) {
    return _.test(/q/gi, x);
  }, xs);
};

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x, y) => (x >= y ? x : y); // <- leave be

// TODO: rewrite max in its "simplest" form
const max = function(xs) {
  return _.reduce(
    function(acc, x) {
      return _keepHighest(acc, x);
    },
    0,
    xs
  );
};

// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

const slice = undefined;

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried
const take = undefined;

module.exports = {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take
};
