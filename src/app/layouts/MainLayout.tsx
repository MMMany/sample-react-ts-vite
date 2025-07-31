import { Container, Box } from "@mui/material";
import { Outlet } from "react-router";
import Header from "#/widgets/Header";
import Footer from "#/widgets/Footer";
import AppMenu from "#/widgets/AppMenu";

function MainLayout() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <AppMenu />
        <Box
          sx={{
            minHeight: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

export default MainLayout;
