import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "80vh",
        width: "xl",
        padding: "80px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 400,
          }}
          gutterBottom
        >
          Contact me
        </Typography>
        <Typography variant="body1" align="center" sx={{ lineHeight: 1.6 }}>
          Feel free to send me a message.
        </Typography>

        <ContactForm />
      </Container>
    </Box>
  );
};

export default Contact;
