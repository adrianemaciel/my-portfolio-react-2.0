import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideIn, staggerContainer, skillItem } from "../animations/animations";
import skills from "../data/skillsData";

const Skills = () => {
  const theme = useTheme();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
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
            textAlign: "left",
            fontSize: {xs: " 2rem", md: "3rem", xl: "3rem"}
          }}
        >
          <span style={{ color: theme.palette.secondary.main }}>Skills</span>{" "}
          and Tools
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.6, textAlign: "left", marginBottom: "1rem" }}
        >
          Constantly learning and mastering tools to create seamless digital
          experiences.
        </Typography>
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
