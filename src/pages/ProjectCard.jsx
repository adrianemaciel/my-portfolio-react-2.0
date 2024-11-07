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
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          transition: "box-shadow 0.3s ease",
          boxShadow: "0px 6px 10px rgba(255, 131, 84, 0.1)",
          "&:hover": {
            boxShadow:
              "10px 10px 20px rgba(255, 131, 84, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <CardMedia
            component="img"
            height="160"
            image={imageUrl}
            alt={title}
            sx={{ transition: "transform 0.3s ease", transform: "scale(1)" }}
          />
        </motion.div>

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
    </motion.div>
  );
};

export default ProjectCard;
