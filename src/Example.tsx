import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./Example.css";

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await axios.get("https://api.github.com/repos/TanStack/query");
      return response.data ?? {};
    },
  });

  if (isPending) return <div>"Loading..."</div>;

  if (error) return <div>`An error has occurred: ${error.message}`</div>;

  return (
    <div id="react-query-example">
      <h1>React Query Example</h1>
      <h2>Repo Name : {data.full_name}</h2>
      <p>{data.description}</p>
      <p className="font-bold py-1">Subs : {data.subscribers_count}</p>
      <p className="font-bold py-1">Stars : {data.stargazers_count}</p>
      <p className="font-bold py-1">Forks : {data.forks_count}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default Example;
