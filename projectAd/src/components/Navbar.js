import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();

  const handleDas = () => {
    navigation("/");
  };

  const handleAds = () => {
    navigation("/create-ads");
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#fff",
          height: "60px",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            APP LOGO
          </Typography>

          <Hidden smDown>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  my: 2,
                  color: "gray",
                  marginLeft: 2,
                  fontSize: 18,
                  fontWeight: 400,
                }}
                onClick={handleDas}
              >
                DASHBOARD
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: "gray",
                  marginLeft: 2,
                  fontSize: 18,
                  fontWeight: 400,
                }}
                onClick={handleAds}
              >
                CREATE ADS
              </Button>
            </Box>
          </Hidden>

          {/* <Hidden mdUp>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  my: 2,
                  color: "gray",
                  marginLeft: 2,
                  fontSize: 18,
                  fontWeight: 400,
                }}
                onClick={handleDas}
              >
                D
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: "gray",
                  marginLeft: 2,
                  fontSize: 18,
                  fontWeight: 400,
                }}
                onClick={handleAds}
              >
                A
              </Button>
            </Box>
          </Hidden> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
