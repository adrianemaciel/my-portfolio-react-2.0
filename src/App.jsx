import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <About />
    </ThemeProvider>
  );
}

export default App;
