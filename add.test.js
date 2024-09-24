const add = require("./js/script.js");

test("Empty String", () => {
  expect(add("")).toBe("");
});
test("Single Integer", () => {
  expect(add("1")).toBe(1);
});
test("Comma as delimiter", () => {
  expect(add("1,6,8")).toBe(15);
});
test("Two Integers", () => {
  expect(add("1,2")).toBe(3);
});
test("Multiple Integers", () => {
  expect(add("1,2,5")).toBe(8);
});
test("Only Alphabets", () => {
  expect(add("a,b,c")).toBe("");
});
test("Alphanumeric", () => {
  expect(add("1,a,2,b,3,c")).toBe(6);
});
test("Newline as delimiter", () => {
  expect(add("1\n3\nc")).toBe(4);
});
test("Newline and comma as delimiter", () => {
  expect(add("1\n3\nc,4")).toBe(8);
});
test("Special character as delimiter", () => {
  expect(add("//$\n1$2$3")).toBe(6);
});
