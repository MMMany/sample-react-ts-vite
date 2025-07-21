import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "#src/App";

test('Renders App "Hello World!"', async () => {
  const { getByText, getByRole } = render(<App />);

  await expect.element(getByText("Hello World!")).toBeInTheDocument();
  await getByRole("button", { name: "Show" }).click();
  await expect.element(getByText("Show hidden text!")).toBeInTheDocument();
});
