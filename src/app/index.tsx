import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

async function enableMocking() {
  if (import.meta.env.MODE !== "development" || import.meta.env.VITE_MOCK !== "true") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

function render() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

enableMocking()
  .then(render)
  .catch((err) => {
    console.error("Error enabling mocking:", err);
  });
