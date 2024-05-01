import { greetEveryone } from "../src/greet.js";
test("Properly greets people", () => {
  const people = [
    { name: "Adrian", surname: "Majcher" },
    { name: "Kot", surname: "Lisa" },
  ];
  const expectedResult = [
    "Cześć Adrian Majcher! Miło Cię widzieć ;)",
    "Cześć Kot Lisa! Miło Cię widzieć ;)",
  ];
  const actualResult = greetEveryone(people);
  expect(actualResult).toEqual(expectedResult);
});
