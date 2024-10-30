import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D3142",
    },
    secondary: {
      main: "#EF8354",
    },
    background: {
      default: "#1C1C1C",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#BFCOCO",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
