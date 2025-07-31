import { setupServer } from "msw/node";
import postsHandlers from "#/pages/PostPage/api/mocks/handlers";

const handlers = [...postsHandlers];

export const server = setupServer(...handlers);
