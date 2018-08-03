const { split } = require("ramda");

// Refactor to remove all arguments by partially applying the function
const words = function(str) {
  return split(" ", str);
};

// write add curried
const add = () => {};

// write compose out!
const compose = () => () => {};

// write the Id Functor!
const Id = () => {};

Id.of = Id;
module.exports = {
  words: words,
  compose: compose,
  add: add,
  Id: Id.of
};
