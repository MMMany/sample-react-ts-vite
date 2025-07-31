import { setupWorker } from "msw/browser";

import postsHandlers from "#/pages/PostPage/api/mocks/handlers";

const handlers = [...postsHandlers];

export const worker = setupWorker(...handlers);
