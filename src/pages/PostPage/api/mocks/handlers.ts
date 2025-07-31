import { http, HttpResponse } from "msw";
import { GET_POSTS } from "../index";
import { type Post } from "../../hooks";

const posts: Post[] = [
  {
    id: "1",
    title: "Post 1",
  },
  {
    id: "2",
    title: "Post 2",
  },
  {
    id: "3",
    title: "Post 3",
  },
];

const handlers = [
  http.get(GET_POSTS, () => {
    return HttpResponse.json(posts);
  }),
];

export default handlers;
