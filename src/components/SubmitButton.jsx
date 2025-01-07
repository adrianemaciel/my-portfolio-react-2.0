import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const SubmitButton = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      variant="outlined"
      color="secondary"
      sx={{
        alignSelf: "center",
        width: "150px",
        fontWeight: 600,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.secondary,
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
          borderColor: theme.palette.text.secondary,
        },
      }}
    >
      {t("contactForm.submit")}
    </Button>
  );
};

export default SubmitButton;
