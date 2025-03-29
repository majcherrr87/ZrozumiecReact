import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "../src/hooks/useLocalStorage";

test("useLocalStorage saves and reads data properly", () => {
  const defaultValue = [1, 2, 3, 4, 5];
  const { result } = renderHook(() =>
    useLocalStorage("example_key", defaultValue)
  );
  expect(result.current[0]).toEqual([1, 2, 3, 4, 5]);
  const setJSONToLocalStorage = result.current[1];

  act(() => {
    setJSONToLocalStorage("example_string");
  });
  expect(result.current[0]).toEqual("example_string");
});
