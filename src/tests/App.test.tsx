/* eslint-disable */
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import App from "#/app/App";
import useCounter from "#/shared/stores/counter";

// Reset Zustand store before each test
beforeEach(() => {
  useCounter.getState().reset();
});

// Clean up the DOM after each test
afterEach(() => {
  cleanup();
});

describe("App Component", () => {
  it('should render "Hello World!" and reveal text on button click', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText("Hello World!")).toBeInTheDocument();

    const showButton = screen.getByRole("button", { name: "Show" });
    await user.click(showButton);

    expect(await screen.findByText("Show hidden text!")).toBeInTheDocument();
  });

  it("should render the initial count", () => {
    render(<App />);
    expect(screen.getByText("Count : 0")).toBeInTheDocument();
  });

  it("should increment the count when the + button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);

    expect(screen.getByText("Count : 1")).toBeInTheDocument();
  });

  it("should decrement the count when the - button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const decrementButton = screen.getByRole("button", { name: "-" });
    await user.click(decrementButton);

    expect(screen.getByText("Count : -1")).toBeInTheDocument();
  });

  it("should reset the count when the Reset button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);
    expect(screen.getByText("Count : 1")).toBeInTheDocument(); // sanity check

    const resetButton = screen.getByRole("button", { name: "Reset" });
    await user.click(resetButton);

    expect(screen.getByText("Count : 0")).toBeInTheDocument();
  });
});
