const { split } = require("ramda");

// Refactor to remove all arguments by partially applying the function
const words = split(" ");

// write add curried
const add = a => b => a + b;

// write compose out!
const compose = (...args) => start =>
  args.reduceRight((acc, fn) => fn(acc), start);

// write the Id Functor!
// Identity
// Composition
let Id = value => ({
  map: f => Id(f(value)),
});

Id.of = Id;

module.exports = {
  words: words,
  compose: compose,
  add: add,
  Id: Id.of
};
