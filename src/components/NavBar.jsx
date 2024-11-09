import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavButton from "./NavButton";
import BackToTopButton from "./BackToTopButton";

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="static" color="background">
        <Container maxWidth="xl">
          <Toolbar
            id="back-to-top-anchor"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.secondary.main,
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <span>AOM</span>
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <NavButton label="About" to="about" />
              <NavButton label="Skills" to="skills" />
              <NavButton label="Projects" to="projects" />
              <NavButton label="Contact" to="contact" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <BackToTopButton />
    </Box>
  );
};

export default NavBar;
