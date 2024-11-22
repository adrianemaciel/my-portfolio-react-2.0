import { Container, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import SocialButtons from "../components/SocialButtons";

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
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                style={{
                  cursor: "pointer",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                About
              </ScrollLink>
              {" • "}
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                style={{
                  cursor: "pointer",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                Skills
              </ScrollLink>
              {" • "}
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                style={{
                  cursor: "pointer",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                Projects
              </ScrollLink>
              {" • "}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                style={{
                  cursor: "pointer",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                Contact
              </ScrollLink>
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
