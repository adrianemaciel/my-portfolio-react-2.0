import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";

const SocialButtons = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      gap={2}
      paddingTop={{ xs: "1rem", md: "1.5rem", xl: "1.5rem" }}
    >
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/adrianemacieldeveloper/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          border: "1px solid",
        }}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://github.com/adrianemaciel"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          border: "1px solid",
        }}
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        href="mailto:adrianemaciel.developer@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          border: "1px solid",
        }}
      >
        <EmailIcon />
      </IconButton>
    </Box>
  );
};

export default SocialButtons;
