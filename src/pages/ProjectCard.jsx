import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getTechnologyIcon } from "../utils/iconMapper";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
  githubLink,
  technologies,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      }}
    >
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: theme.palette.text.primary }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
          {technologies?.map((tech) => (
            <Box key={tech}>{getTechnologyIcon(tech, theme)}</Box>
          ))}
        </Box>
      </CardContent>

      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          href={projectLink}
          target="_blank"
          sx={{ color: theme.palette.secondary.main }}
        >
          View Project
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          href={githubLink}
          target="_blank"
          sx={{ color: theme.palette.secondary.main }}
        >
          GitHub Repo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
