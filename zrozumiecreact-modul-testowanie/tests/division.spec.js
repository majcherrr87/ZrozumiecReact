import { division } from "../src/division.js";

test("Test dzielenia", () => {
  const a = 42;
  const b = 6;
  const expectedResult = 7;

  const actualResult = division(a, b);
  expect(actualResult).toEqual(expectedResult);
});
test("Test dzielenia przez zero", () => {
  const a = 25;
  const b = 0;
  const expectedResult = Infinity;

  const actualResult = division(a, b);
  expect(actualResult).toEqual(expectedResult);
});
test("Test dzielenia napisaów przez siebie ", () => {
  const a = "a";
  const b = "b";

  const actualResult = division(a, b);

  expect(actualResult).toEqual(NaN);
});
