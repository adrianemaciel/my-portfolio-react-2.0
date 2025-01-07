import { AppBar, Box, Container, Toolbar, Typography, Drawer, IconButton, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavButton from "./NavButton";
import MenuButton from "./MenuButton";
import BackToTopButton from "./BackToTopButton";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
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
              <NavButton label={t("navbar.about")} to="about" />
              <NavButton label={t("navbar.skills")} to="skills" />
              <NavButton label={t("navbar.projects")} to="projects" />
              <NavButton label={t("navbar.contact")} to="contact" />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                  backgroundColor: theme.palette.background.default,
                  borderRadius: 1,
                  "& .MuiSelect-icon": {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <MenuItem
                  value="en"
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                >
                  Inglês
                </MenuItem>
                <MenuItem
                  value="pt"
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                >
                  Português
                </MenuItem>
              </Select>
              <MenuButton onClick={handleDrawerToggle} />
            </Box>
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
          <NavButton label={t("navbar.about")} to="about" onClick={handleDrawerToggle} />
          <NavButton label={t("navbar.skills")} to="skills" onClick={handleDrawerToggle} />
          <NavButton label={t("navbar.projects")} to="projects" onClick={handleDrawerToggle} />
          <NavButton label={t("navbar.contact")} to="contact" onClick={handleDrawerToggle} />
        </Box>
      </Drawer>

      <BackToTopButton />
    </Box>
  );
};

export default NavBar;
