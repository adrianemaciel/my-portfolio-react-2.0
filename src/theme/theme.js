import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F5D75",
    },
    secondary: {
      main: "#EF8354",
    },
    background: {
      default: "#1C1C1C",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E0E0E0",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
