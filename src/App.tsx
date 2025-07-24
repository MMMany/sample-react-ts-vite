import { useState } from "react";
import "./App.css";
import useCounter from "./stores/counter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Example from "./Example";
import Button from "./components/ui/Button";

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(false);
  const { count, increment, decrement, reset } = useCounter();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-6 p-2">
        <p className="font-bold">Hello World!</p>
        <Button onClick={() => setShow(true)}>Show</Button>
        {show && <p className="outline-6 outline-blue-500">Show hidden text!</p>}
        <div>
          <h1>Count : {count}</h1>
          {/* <button onClick={() => setCount(count + 1)}>+</button> */}
          <div>
            <Button onClick={() => increment()}>+</Button>
            <Button onClick={() => decrement()}>-</Button>
            <Button onClick={() => reset()}>Reset</Button>
          </div>
        </div>
        <Example />
      </div>
    </QueryClientProvider>
  );
}

export default App;
