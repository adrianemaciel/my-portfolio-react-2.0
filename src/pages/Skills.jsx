import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { slideIn, staggerContainer, skillItem } from "../animations/animations";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import skills from "../data/skillsData";

const Skills = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSeeAllSkills = () => {
    navigate("/skills");
  };

  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "50vh",
        width: "100%",
        padding: { xs: "20px", md: "40px", xl: "80px" },
        backgroundColor: theme.palette.primary.main,
      }}
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideIn}
        style={{
          width: "100%",
          color: theme.palette.text.primary,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: theme.palette.text.primary,
            marginBottom: "1rem",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "2rem", md: "3rem", xl: "3rem" },
          }}
        >
          <span style={{ color: theme.palette.secondary.main }}>
            {t("skills.title.highlight")}
          </span>{" "}
          {t("skills.title.andTools")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            textAlign: "left",
            marginBottom: "1rem",
            display: { xs: "none", md: "block" },
          }}
        >
          {t("skills.description")}
        </Typography>

        <Button
          variant="text"
          onClick={handleSeeAllSkills}
          sx={{
            display: "flex",
            gap: "8px",
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
            },
          }}
        >
          {t("skills.button")}
          <FaArrowRight />
        </Button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "20px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillItem}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: `${skill.size}px`,
                color: theme.palette.text.secondary,
                textAlign: "center",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "bold",
              }}
            >
              {skill.name}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Skills;
