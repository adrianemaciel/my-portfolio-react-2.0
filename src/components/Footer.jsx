import { Container, Typography, Link, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
              }}
              align="center"
            >
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{ color: theme.palette.text.primary }}
              >
                Home
              </Link>
              {" • "}
              <Link
                href="/about"
                color="inherit"
                underline="none"
                sx={{ color: theme.palette.text.primary }}
              >
                About
              </Link>
              {" • "}
              <Link
                href="/projects"
                color="inherit"
                underline="none"
                sx={{ color: theme.palette.text.primary }}
              >
                Projects
              </Link>
              {" • "}
              <Link
                href="/contact"
                color="inherit"
                underline="none"
                sx={{ color: theme.palette.text.primary }}
              >
                Contacts
              </Link>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <SocialButtons />
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
            align="center"
          >
            Adriane Maciel 2024 © All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
