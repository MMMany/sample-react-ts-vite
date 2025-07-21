import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <p>Hello World!</p>
      <button onClick={() => setShow(true)}>Show</button>
      {show && <p>Show hidden text!</p>}
    </>
  );
}

export default App;
