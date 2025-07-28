import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface RepoData {
  full_name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

function Example() {
  const { isPending, error, data, isFetching } = useQuery<RepoData>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await axios.get<RepoData>("https://api.github.com/repos/TanStack/query");
      return response.data ?? {};
    },
  });

  if (isPending) return <Box>"Loading..."</Box>;

  if (error) return <Box>`An error has occurred: ${error.message}`</Box>;

  return (
    <Box id="react-query-example">
      <Typography variant="h4">React Query Example</Typography>
      <Typography variant="h5">Repo Name : {data.full_name}</Typography>
      <Typography>{data.description}</Typography>
      <Typography sx={{ py: 1, fontWeight: "bold" }}>Subs : {data.subscribers_count}</Typography>
      <Typography sx={{ py: 1, fontWeight: "bold" }}>Stars : {data.stargazers_count}</Typography>
      <Typography sx={{ py: 1, fontWeight: "bold" }}>Forks : {data.forks_count}</Typography>
      <Box>{isFetching ? "Updating..." : ""}</Box>
    </Box>
  );
}

export default Example;
