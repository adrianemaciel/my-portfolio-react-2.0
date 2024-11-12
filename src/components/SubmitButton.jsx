import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SubmitButton = () => {
  const theme = useTheme();

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
      Send
    </Button>
  );
};

export default SubmitButton;
