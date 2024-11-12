import { Box } from "@mui/material";
import SubmitButton from "./SubmitButton";
import StyledTextField from "./StyledTextField";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
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
        <StyledTextField label="Name" />
        <StyledTextField label="E-mail" />
        <StyledTextField label="Message" multiline rows={4} />
        <SubmitButton />
      </Box>
    </form>
  );
};

export default ContactForm;
