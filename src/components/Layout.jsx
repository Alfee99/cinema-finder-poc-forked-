import { Box, Container, Grid } from "@mui/material";
import TopBar from "./TopBar";

const Layout = ({ children }) => (
  <Box
    sx={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #0a0a0f 0%, #12101a 50%, #0d0d12 100%)",
      backgroundAttachment: "fixed",
    }}
  >
    <TopBar />
    <Container
      maxWidth="xl"
      sx={{ mt: 2, pb: 3, height: "calc(100vh - 96px)" }}
    >
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {children}
      </Grid>
    </Container>
  </Box>
);
export default Layout;
