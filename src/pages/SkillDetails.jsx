import { Box, Typography, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import SkillDetailsCard from "../components/SkillDetailsCard";

const SkillDetails = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          color: theme.palette.secondary.primary,
          marginBottom: "1rem",
          lineHeight: 1.6,
          letterSpacing: "0.1rem",
          textAlign: { xs: "center", md: "left" },
          fontSize: { xs: "2rem", md: "3rem", xl: "3rem" },
        }}
      >
        {t("skillDetails.title.part1")}{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          {t("skillDetails.title.highlight")}
        </span>
        {""}
      </Typography>

      <Button
        variant="text"
        onClick={handleGoBack}
        sx={{
          display: "flex",
          gap: "8px",
          marginBottom: "2rem",
          alignSelf: "flex-start",
          marginLeft: { xs: "0", md: "0", xl: "4rem" },
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          opacity: 0.7,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            opacity: 1,
          },
        }}
      >
        <FaArrowLeft />
        {t("skillDetails.button")}
      </Button>

      <SkillDetailsCard />
    </Box>
  );
};

export default SkillDetails;
