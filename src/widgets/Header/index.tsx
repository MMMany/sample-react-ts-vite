import { Box, Typography, Avatar } from "@mui/material";

function Header() {
  return (
    <Box sx={{ width: "100vw", height: "5rem", borderBottom: "1px solid black" }}>
      <Box sx={{ width: "120px", height: "100%" }}>
        <Typography variant="h1">Logo</Typography>
      </Box>
      <Avatar sx={{ width: "50px", height: "50px", position: "relative", right: "1rem" }} />
    </Box>
  );
}

export default Header;
