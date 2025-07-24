import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { server } from "./mocks/server";
import { beforeAll, afterEach, afterAll } from "vitest";

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
