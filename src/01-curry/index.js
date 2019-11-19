const add = (x, y) => x + y;

add([1, 2]);
add(1, 2);

const toPair = f => ([x, y]) => f(x, y);
const fromPair = f => (x, y) => f([x, y]);

//const result = fromPair(toPair(add))(1, 2);

const flip = f => (y, x) => f(x, y);
//const result = flip(add)(2, 1);

const curry = f => x => y => f(x, y);
//const result = curry(add)(3)(1);

const curriedAdd = curry(add);
const increment = curriedAdd(1);
const result = increment(4);

const uccurry = f => (x, y) => f(x)(y);

console.info(result);
