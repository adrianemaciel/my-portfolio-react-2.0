import { Box, Container, Typography, useTheme } from "@mui/material";
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
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "50vh",
        Width: "xl",
        padding: "80px",
        backgroundColor: theme.palette.primary.main,
      }}
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideIn}
        style={{ width: "30%", color: theme.palette.text.primary }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: theme.palette.text.primary, marginBottom: "1rem" }}
        >
          <span style={{ color: theme.palette.secondary.main }}>Skills</span>{" "}
          and Tools
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          Constantly learning and mastering tools to create seamless digital
          experiences.
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        style={{
          width: "60%",
          height: "100%",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
