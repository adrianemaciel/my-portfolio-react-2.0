import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "column", xl: "row" },
        alignItems: "center",
        padding: { xs: "20px", md: "40px", xl: "80px" },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: theme.palette.text.primary,
            marginBottom: "1rem",
            lineHeight: 1.6,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem", xl: "3rem" },
          }}
        >
          {t("projects.intro.part1")}{" "}
          <span style={{ color: theme.palette.secondary.main }}>
            {t("projects.intro.highlight")}
          </span>{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={8} justifyContent="center">
          {projects.map((project, index) => (
            <Grid xs={10} key={index}>
              <ProjectCard
                title={t(project.title)}
                description={t(project.description)}
                imageUrl={project.imageUrl}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
                technologies={project.technologies}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
