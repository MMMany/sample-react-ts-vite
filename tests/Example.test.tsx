import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Example from "../src/Example";
import { server } from "./mocks/server";
import { http, HttpResponse } from "msw";
import { describe, it, expect, afterEach, beforeEach } from "vitest";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for tests
    },
  },
});

const renderExample = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>,
  );

describe("Example Component", () => {
  beforeEach(() => {
    queryClient.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render loading state initially", () => {
    renderExample();
    expect(screen.getByText(/"Loading..."/)).toBeInTheDocument();
  });

  it("should render repo data on successful fetch", async () => {
    renderExample();

    await waitFor(() => {
      expect(screen.getByText("Repo Name : TanStack/query")).toBeInTheDocument();
    });

    expect(screen.getByText(/Powerful asynchronous state management/)).toBeInTheDocument();
    expect(screen.getByText("Subs : 123")).toBeInTheDocument();
    expect(screen.getByText("Stars : 456")).toBeInTheDocument();
    expect(screen.getByText("Forks : 789")).toBeInTheDocument();
  });

  it("should render error message on fetch failure", async () => {
    server.use(
      http.get("https://api.github.com/repos/TanStack/query", () => {
        return new HttpResponse(null, { status: 500, statusText: "Internal Server Error" });
      }),
    );

    renderExample();

    await waitFor(() => {
      expect(screen.getByText(/An error has occurred:/)).toBeInTheDocument();
    });
  });
});
