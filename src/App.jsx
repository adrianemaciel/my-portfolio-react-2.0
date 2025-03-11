import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe o Router
import theme from "./theme/theme";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import SkillDetails from "./pages/SkillDetails";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/skills" element={<SkillDetails />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
