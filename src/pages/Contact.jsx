import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
          {t("contact.title")}
        </Typography>
        <Typography variant="body1" align="center" sx={{ lineHeight: 1.6 }}>
          {t("contact.subTitle")}
        </Typography>

        <ContactForm />
      </Container>
    </Box>
  );
};

export default Contact;
