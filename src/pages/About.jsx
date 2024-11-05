import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../animations/animations";
import SocialButtons from "../components/SocialButtons";

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        height="100vh"
      >
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            Hello,
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <Typography variant="h2" sx={{ color: theme.palette.text.primary }}>
            I am{" "}
            <Box
              component="span"
              sx={{
                color: theme.palette.secondary.main,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                letterSpacing: "0.1rem",
              }}
            >
              Adriane Maciel,
            </Box>
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <Typography variant="h3" sx={{ color: theme.palette.text.primary }}>
            Software Developer
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.secondary, marginBottom: "1.5rem" }}
          >
            Systems analysis and development student and developer enthusiastic
            about creating{" "}
            <Box component="span" sx={{ color: theme.palette.secondary.main }}>
              interactive{" "}
            </Box>
            digital experiences on the web.
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <SocialButtons />
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
