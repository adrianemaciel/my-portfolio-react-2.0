import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
  githubLink,
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
