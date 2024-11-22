import { useTheme } from "@mui/material/styles";
import ScrollTop from "./ScrollTop";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton = (props) => {
  const theme = useTheme();

  return (
    <ScrollTop {...props}>
      <Fab
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
          border: `1px solid ${theme.palette.text.secondary}`,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
};

export default BackToTopButton;
