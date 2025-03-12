import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../animations/animations";
import SocialButtons from "../components/SocialButtons";

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" id="about">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        minHeight={{ xs: "70vh", md: "100vh", xl: "100vh" }}
        padding={{ xs: "10px", md: "10px", xl: "25px" }}
      >
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            {t("about.greeting")}
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <Typography variant="h2" sx={{ color: theme.palette.text.primary }}>
            {t("about.introduction")}{" "}
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
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "3rem", xl: "3rem" },
              paddingTop: { xs: "0.5rem", md: "0.1rem", xl: "0.1rem" },
            }}
          >
            {t("about.role")}
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "1rem", md: "1.5rem", xl: "1.5rem" },

              paddingTop: { xs: "0.5rem", md: "0.1rem", xl: "0.1rem" },
            }}
          >
            {t("about.description.part1")}{" "}
            <Box component="span" sx={{ color: theme.palette.secondary.main }}>
              {t("about.description.highlight")}
            </Box>{" "}
            {t("about.description.part2")}
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
