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
        justifyContent: "space-around",
        width: "xl",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <Box
        sx={{
          width: "30%",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: theme.palette.text.primary,
            marginBottom: "1rem",
            lineHeight: 1.6,
          }}
        >
          Take a look at my developed{" "}
          <span style={{ color: theme.palette.secondary.main }}>projects</span>{" "}
        </Typography>
      </Box>

      <Box sx={{ width: "50%", flexDirection: "row" }}>
        <Grid container spacing={8}>
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
