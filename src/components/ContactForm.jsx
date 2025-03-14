import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Box, Snackbar, Alert } from "@mui/material";
import SubmitButton from "./SubmitButton";
import StyledTextField from "./StyledTextField";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setSnackbarSeverity("error");
      setSnackbarMessage("Por favor, preencha todos os campos.");
      setSnackbarOpen(true);
      return;
    }

    const validateName = () => {
      return name.length >= 3;
    };

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLocaleLowerCase());
    };

    const validateMessage = (message) => {
      return message.length >= 10;
    };

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setSnackbarSeverity("error");
      setSnackbarMessage("Erro de configuração. Tente novamente mais tarde.");
      setSnackbarOpen(true);
      return;
    }

    if (!validateName(name)) {
      setSnackbarSeverity("error");
      setSnackbarMessage("O nome deve ter no mínimo 3 caracteres");
      setSnackbarOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Por favor, insira um email válido!");
      setSnackbarOpen(true);
      return;
    }

    if (!validateMessage(message)) {
      setSnackbarSeverity("error");
      setSnackbarMessage("A mensagem deve ter no mínimo 10 caracteres.");
      setSnackbarOpen(true);
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSnackbarSeverity("success");
        setSnackbarMessage("Seu e-mail foi enviado com sucesso!");
        setSnackbarOpen(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "Ocorreu um erro ao enviar seu e-mail. Tente novamente mais tarde."
        );
        setSnackbarOpen(true);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 4,
        }}
      >
        <StyledTextField
          label={t("contactForm.nameLabel")}
          type="text"
          placeholder={t("contactForm.namePlaceholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextField
          label={t("contactForm.emailLabel")}
          type="text"
          placeholder={t("contactForm.emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label={t("contactForm.messageLabel")}
          type="message"
          multiline
          rows={4}
          placeholder={t("contactForm.messagePlaceholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton />
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </form>
  );
};

export default ContactForm;
