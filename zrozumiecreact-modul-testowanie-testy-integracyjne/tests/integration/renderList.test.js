import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RenderList } from "../../src/components/RenderList/RenderList";

test("Properly render loaded data ", async () => {
  window.fetch = jest.fn(() => {
    return {
      then: () => {
        return {
          then: (callback) => {
            return callback([{ name: "Ilona" }, { name: "Lisa" }]);
          },
        };
      },
    };
  });
  render(<RenderList />);
  expect(await screen.findByText("Ilona")).toBeVisible();
  expect(await screen.findByText("Lisa")).toBeVisible();
});
