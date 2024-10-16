import { Box, Container, Typography, useTheme } from "@mui/material";

const skills = [
  { name: "JavaScript", size: 36 },
  { name: "React", size: 28 },
  { name: "Node", size: 30 },
  { name: "SQL", size: 22 },
  { name: "Express", size: 34 },
  { name: "CSS", size: 24 },
  { name: "HTML", size: 26 },
  { name: "MySQL", size: 20 },
  { name: "Figma", size: 18 },
  { name: "Postman", size: 24 },
  { name: "Styled-Components", size: 18 },
  { name: "Material UI", size: 28 },
  { name: "Vite", size: 26 },
  { name: "Git", size: 26 },
  { name: "GitHub", size: 24 },
];

const Skills = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "50vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            width: "30%",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ color: theme.palette.text.primary, marginBottom: "1rem" }}
          >
            <span style={{ color: "#EF8354" }}>Skills</span> and Tools
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            metus enim, eget facilisis metus interdum ac.
          </Typography>
        </Box>

        <Box
          sx={{
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
            <Box
              key={index}
              sx={{
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
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;
