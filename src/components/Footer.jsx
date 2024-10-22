import { Container, Typography, Link, IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
            marginBottom: "1rem",
          }}
        >
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
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/adrianemacieldeveloper/"
            target="_blank"
            sx={{ color: theme.palette.secondary.main }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/adrianemaciel"
            target="_blank"
            sx={{ color: theme.palette.secondary.main }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="Email"
            href="mailto:adrianemaciel.developer@gmail.com"
            target="_blank"
            sx={{ color: theme.palette.secondary.main }}
          >
            <EmailIcon />
          </IconButton>
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
      </Container>
    </Box>
  );
};

export default Footer;
