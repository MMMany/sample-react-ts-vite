import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/theme";
import { RouterProvider } from "react-router";
import appRouter from "./routes/AppRouter";
import I18nInit from "./i18n";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nInit />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
