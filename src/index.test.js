const { add, words, compose, Id } = require("./");
const { inc, multiply } = require("ramda");

test("Refactor words to be partially applied", () => {
  expect(words("Hello World")).toEqual(["Hello", "World"]);
});

test("Curried add", () => {
  expect(add(1)(2)).toEqual(3);
  expect(add(2)(4)).toEqual(6);
});

test("Compose should apply functions from right to left", () => {
  expect(compose(inc, multiply(2))(10)).toBe(21);
  expect(compose(multiply(2), inc)(10)).toBe(22);
});
