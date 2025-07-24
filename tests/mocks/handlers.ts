import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.github.com/repos/TanStack/query", () => {
    return HttpResponse.json({
      full_name: "TanStack/query",
      description:
        "🤖 Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and Vue Query.",
      subscribers_count: 123,
      stargazers_count: 456,
      forks_count: 789,
    });
  }),
];
