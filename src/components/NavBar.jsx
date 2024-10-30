import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="static" color="background">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <span style={{ color: theme.palette.secondary.main }}>AOM</span>
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                color="inherit"
              >
                About
              </Button>
              <Button
                sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                color="inherit"
              >
                Projects
              </Button>
              <Button
                sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                color="inherit"
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
