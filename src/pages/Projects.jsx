import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

const Projects = () => {
  const theme = useTheme();
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
            fontSize: { xs: " 2rem", md: "3rem", xl: "3rem" },
          }}
        >
          Take a look at my developed{" "}
          <span style={{ color: theme.palette.secondary.main }}>projects</span>{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={8} justifyContent="center">
          {projects.map((project, index) => (
            <Grid xs={10} key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
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
