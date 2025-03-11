import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { getTechnologyIcon } from "../utils/iconMapper";
import skills from "../data/skillsData";

const SkillDetailsCard = () => {
  const theme = useTheme();

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryTitles = {
    frontend: "Front-end",
    backend: "Back-end",
    tools: "Ferramentas",
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", marginBottom: "40px" }}>
      {Object.keys(groupedSkills).map((category) => (
        <Box key={category}
        sx={{marginBottom: "40px"}}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            <span style={{ color: theme.palette.secondary.main }}>|</span>{" "}
            {categoryTitles[category]}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: "30px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {groupedSkills[category].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Card
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "100%" },
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
                    <CardContent
                      sx={{
                        minWidth: 20,
                        padding: { xs: "10px", sm: "15px", md: "20px" },
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        {getTechnologyIcon(skill.name, theme)}
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: theme.palette.text.primary,
                            marginTop: "10px",
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          {skill.experience}%
                        </Typography>

                        <LinearProgress
                          variant="determinate"
                          value={skill.experience}
                          sx={{
                            height: "10px",
                            borderRadius: "0px",
                            flexGrow: 1,
                            backgroundColor: theme.palette.background.paper,
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: theme.palette.secondary.main,
                            },
                          }}
                        />
                      </Box>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillDetailsCard;
