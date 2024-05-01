import { cancellableDelay } from "../src/timer.js";
import { jest } from "@jest/globals";
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("Callback is called after the given amout of seconds passed", () => {
  const timeInSeconds = 2;

  const callback = jest.fn(() => {
    console.log(`Ta funkcja powinna się wykonać po ${timeInSeconds} sekundach`);
  });

  cancellableDelay(2, callback);
  jest.runAllTimers();

  expect(callback).toHaveBeenCalled();
  expect(setTimeout).toHaveBeenCalledWith(
    expect.any(Function),
    timeInSeconds * 1000
  );
});
test("Callback is aborted", () => {
  const timeInSeconds = 2;

  const callback = jest.fn(() => {
    console.log(`Ta funkcja powinna się wykonać po ${timeInSeconds} sekundach`);
  });

  const stopFunction = cancellableDelay(2, callback);
  stopFunction();
  jest.runAllTimers();

  expect(callback).not.toHaveBeenCalled();
});
