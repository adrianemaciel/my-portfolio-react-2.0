import { Box, Typography, Button, Container } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h2" color="primary">
          Hello, I am <span style={{ color: "#EF8354" }}>Adriane Maciel</span>,
        </Typography>
        <Typography variant="h3" color="text.primary">
          Developer Software
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Systems analysis and development student and developer enthusiastic
          about creating <span style={{ color: "#EF8354" }}>interactive</span>{" "}
          digital experiences on the web.
        </Typography>
        <Button variant="outlined" color="secondary" sx={{ mt: 4 }}>
          Let’s get in touch!
        </Button>
      </Box>
    </Container>
  );
};

export default About;
