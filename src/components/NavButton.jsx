import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";

const NavButton = ({ label, to }) => {
  const theme = useTheme();

  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-70}
    >
      <Button
        sx={{
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.text.primary,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavButton;
