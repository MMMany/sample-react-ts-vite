import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { format, differenceInDays } from "date-fns";
import { GET_POSTS } from "../api";

export type Post = {
  id: string;
  title: string;
};

export const usePosts = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async ({ signal }) => {
      const response = await axios.get<Post[]>(GET_POSTS, { signal });
      return response.data;
      // const posts: Post[] = response.data.map((post: Post) => {
      //   let time;
      //   if (differenceInDays(new Date(), post.time) > 0) {
      //     time = format(post.time, "yyyy-MM-dd");
      //   } else {
      //     time = format(post.time, "HH:mm");
      //   }
      //   return {
      //     ...post,
      //     time,
      //   };
      // });
      // return posts;
    },
    staleTime: 5 * 1000,
  });

  return query;
};
