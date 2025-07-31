import { usePosts } from "./hooks";
import { Box, Button, Typography } from "@mui/material";

function PostPage() {
  const { isPending, error, data, refetch } = usePosts();

  if (error) {
    return <Box>An error has occurred: {error.message}</Box>;
  }

  if (isPending) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <Button onClick={() => void refetch()} />
      <Box sx={{ px: "1rem", py: "0.5rem", display: "flex", flexDirection: "column", gap: "1rem", overflow: "auto" }}>
        {data.map((post) => (
          <Typography key={post.id} variant="h5">
            {post.title}
          </Typography>
        ))}
      </Box>
    </>
  );
}

export default PostPage;
