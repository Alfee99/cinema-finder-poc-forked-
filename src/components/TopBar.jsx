import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SiteLogo from "./SiteLogo";
import MapTypeMenu from "./MapTypeMenu";

const TopBar = () => (
  <AppBar
    position="static"
    elevation={0}
    sx={{
      background: "linear-gradient(90deg, #0a0a0f 0%, #1a1508 100%)",
      borderBottom: "1px solid rgba(245, 200, 66, 0.2)",
      backdropFilter: "blur(12px)",
    }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <SiteLogo />
        <Typography
          variant="h6"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: "0.08em",
            color: "#f5c842",
            textDecoration: "none",
            textTransform: "uppercase",
            flexGrow: 1,
            transition: "opacity 0.2s ease",
            "&:hover": {
              opacity: 0.75,
            },
          }}
        >
          Cinema Finder
        </Typography>
        <MapTypeMenu />
      </Toolbar>
    </Container>
  </AppBar>
);
export default TopBar;
