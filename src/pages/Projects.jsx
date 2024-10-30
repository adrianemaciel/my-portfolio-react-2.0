import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
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
          <Typography variant="h4" sx={{ lineHeight: 1.6 }}>
            Take a look at my developed projects
          </Typography>
        </Box>

        <Box sx={{ width: "60%", flexDirection: "row" }}>
          <Grid container spacing={8}>
            {projects.map((project, index) => (
              <Grid item xs={10} key={index}>
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
    </Container>
  );
};

export default Projects;
