import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../src/components/Button/Button";

test("Properly renders passed test", () => {
  render(<Button>kliknij mnie</Button>);
  expect(screen.getByRole("button")).toHaveTextContent("kliknij mnie");
});

test("Calls onClick callback after being clicked", () => {
  const onClikCallback = jest.fn(() => console.log("Button Clicked"));
  render(<Button onClick={onClikCallback} />);
  fireEvent.click(screen.getByRole("button"));
  expect(onClikCallback).toHaveBeenCalled();
});
