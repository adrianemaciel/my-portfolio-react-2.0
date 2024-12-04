import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Snackbar, Alert } from "@mui/material";
import SubmitButton from "./SubmitButton";
import StyledTextField from "./StyledTextField";

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setSnackbarSeverity("error")
      setSnackbarMessage("Please fill out all fields.")
      setSnackbarOpen(true)
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setSnackbarSeverity("error");
      setSnackbarMessage("Configuration error. Please try again later.");
      setSnackbarOpen(true);
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSnackbarSeverity("success");
        setSnackbarMessage("Your email was sent successfully!");
        setSnackbarOpen(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "There was an error sending your email. Please try again later."
        );
        setSnackbarOpen(true);
      })
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
          label="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextField
          label="E-mail"
          type="text"
          placeholder=" E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Message"
          type="message"
          multiline rows={4}
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
