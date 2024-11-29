import { AppBar, Box, Container, Toolbar, Typography, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import NavButton from "./NavButton";
import MenuButton from "./MenuButton";
import BackToTopButton from "./BackToTopButton";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

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

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <NavButton label="About" to="about" />
              <NavButton label="Skills" to="skills" />
              <NavButton label="Projects" to="projects" />
              <NavButton label="Contact" to="contact" />
            </Box>

            <MenuButton onClick={handleDrawerToggle} />
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            paddingTop: 6,
          }}
        >
          <NavButton label="About" to="about" onClick={handleDrawerToggle} />
          <NavButton label="Skills" to="skills" onClick={handleDrawerToggle} />
          <NavButton label="Projects" to="projects" onClick={handleDrawerToggle} />
          <NavButton label="Contact" to="contact" onClick={handleDrawerToggle} />
        </Box>
      </Drawer>

      <BackToTopButton />
    </Box>
  );
};

export default NavBar;
