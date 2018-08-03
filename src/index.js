const { split } = require("ramda");

// Refactor to remove all arguments by partially applying the function
const words = split(" ");

// write add curried
const add = a => b => a + b;

// write compose out!
const compose = () => () => {};

// write the Id Functor!
const Id = () => {};

module.exports = {
  words: words,
  compose: compose,
  add: add,
  Id: Id
};
