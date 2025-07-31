/* eslint-disable */
import { describe, it, expect, beforeEach } from "vitest";
import useCounter from "#/shared/stores/counter";
import { act } from "@testing-library/react";

describe("useCounter Store", () => {
  // Reset the store's state before each test
  beforeEach(() => {
    act(() => {
      useCounter.getState().reset();
    });
  });

  it("should have an initial count of 0", () => {
    const { count } = useCounter.getState();
    expect(count).toBe(0);
  });

  it("should increment the count", () => {
    const { increment } = useCounter.getState();
    act(() => {
      increment();
    });
    const { count } = useCounter.getState();
    expect(count).toBe(1);
  });

  it("should decrement the count", () => {
    const { decrement } = useCounter.getState();
    act(() => {
      decrement();
    });
    const { count } = useCounter.getState();
    expect(count).toBe(-1);
  });

  it("should reset the count to 0", () => {
    const { increment, reset } = useCounter.getState();

    // Increment first to make sure reset works
    act(() => {
      increment();
      increment();
    });
    expect(useCounter.getState().count).toBe(2);

    // Then reset
    act(() => {
      reset();
    });
    const { count } = useCounter.getState();
    expect(count).toBe(0);
  });
});
