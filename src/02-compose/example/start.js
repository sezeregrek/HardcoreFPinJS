//https://codepen.io/drboolean/pen/zYYPmZO
//==============
const _ = require("ramda");
const { formatMoney } = require("accounting");

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const isLastInStock = function(cars) {
  const reversed_cars = _.last(cars);
  return _.prop("in_stock", reversed_cars);
};

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = undefined;

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const _average = function(xs) {
  return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

const averageDollarValue = function(cars) {
  const dollar_values = _.map(_.prop("dollar_value"), cars);
  return _average(dollar_values);
};

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = _.replace(/\W+/g, "_"); //<-- leave this alone and use to sanitize

const sanitizeNames = undefined;

// Bonus 1:
// ============
// Refactor availablePrices with compose.

const availablePrices = function(cars) {
  const available_cars = _.filter(_.prop("in_stock"), cars);
  return available_cars.map(x => formatMoney(x.dollar_value)).join(", ");
};

// Bonus 2:
// ============
// Refactor to pointfree.

const fastestCar = function(cars) {
  const sorted = _.sortBy(car => car.horsepower, cars);
  const fastest = _.last(sorted);
  return fastest.name + " is the fastest";
};

module.exports = {
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  sanitizeNames,
  availablePrices,
  fastestCar
};
