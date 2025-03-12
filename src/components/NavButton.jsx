import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const NavButton = ({ label, to, onClick }) => {
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
        onClick={onClick}
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
NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
