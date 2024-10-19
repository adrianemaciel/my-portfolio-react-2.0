import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    imageUrl: "src/assets/screencapture-localhost-5173-2024-10-16-00_30_43.png",
    projectLink: "https://example.com/project1",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    imageUrl: "src/assets/screencapture-localhost-5173-2024-09-30-23_06_28.png",
    projectLink: "https://example.com/project2",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 2.",
    imageUrl:
      "src/assets/screencapture-adriane-pokedex-netlify-app-2024-10-15-19_47_00.png",
    projectLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Project 4",
    description: "A brief description of Project 2.",
    imageUrl:
      "src/assets/screencapture-adrianemaciel-github-io-teste-desafio-m3-2024-10-15-19_45_26.png",
    projectLink: "https://example.com/project4",
    githubLink: "https://github.com/yourusername/project4",
  },
];
const Projects = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
              <Grid item xs={12} key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectLink={project.projectLink}
                  githubLink={project.githubLink}
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
