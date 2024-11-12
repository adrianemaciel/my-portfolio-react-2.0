import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StyledTextField = ({ label, ...props }) => {
  const theme = useTheme();

  return (
    <TextField
      label={label}
      variant="filled"
      fullWidth
      required
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
        "& .MuiInputLabel-root": {
          color: theme.palette.text.secondary,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.palette.secondary.main,
        },
        "& .MuiFilledInput-root": {
          "&:before": {
            borderBottomColor: theme.palette.primary.main,
          },
          "&:after": {
            borderBottomColor: theme.palette.secondary.main,
          },
        },
      }}
      {...props}
    />
  );
};

export default StyledTextField;
