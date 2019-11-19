const { words, sentences, filterQs, max, slice, take } = require("./start");
//const { words, sentences, filterQs, max, slice, take } = require("./finish");

test("Ex1: split", () => {
  expect(words("Jingle bells Batman smells")).toStrictEqual([
    "Jingle",
    "bells",
    "Batman",
    "smells"
  ]);
});

test("Ex1a: map/split", () => {
  expect(
    sentences(["Jingle bells Batman smells", "Robin laid an egg"])
  ).toStrictEqual([
    ["Jingle", "bells", "Batman", "smells"],
    ["Robin", "laid", "an", "egg"]
  ]);
});

test("Ex2: filter", () => {
  expect(
    filterQs(["quick", "camels", "quarry", "over", "quails"])
  ).toStrictEqual(["quick", "quarry", "quails"]);
});

test("Ex3: max", () => {
  expect(max([323, 523, 554, 123, 5234])).toBe(5234);
});

test("Bonus 1", () => {
  expect(slice(1)(3)(["a", "b", "c"])).toStrictEqual(["b", "c"]);
});

test("Bonus 2", () => {
  expect(take(2)(["a", "b", "c"])).toStrictEqual(["a", "b"]);
});
