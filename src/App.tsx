import { useState } from "react";
import useCounter from "./stores/counter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Example from "./Example";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(false);
  const { count, increment, decrement, reset } = useCounter();

  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
          Hello World!
        </Typography>
        <Button variant="contained" onClick={() => setShow(true)}>
          Show
        </Button>
        {show && <Typography sx={{ outline: "6px solid blue" }}>Show hidden text!</Typography>}
        <Box>
          <Typography variant="h1">Count : {count}</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" onClick={() => increment()}>
              +
            </Button>
            <Button variant="contained" onClick={() => decrement()}>
              -
            </Button>
            <Button variant="contained" onClick={() => reset()}>
              Reset
            </Button>
          </Box>
        </Box>
        <Example />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
