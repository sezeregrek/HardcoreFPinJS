const { compose } = require("ramda");

const toUpper = str => str.toUpperCase();

const exclaim = str => str + "!";

const first = xs => xs[0];

//const compose = (f, g) => x => f(g(x)); //associative

//const shout = compose(exclaim, toUpper);
//const shout = compose(first, compose(exclaim, toUpper));
const shout = compose(exclaim, toUpper, first);
console.info(shout("tears"));
