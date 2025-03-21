import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const MenuButton = ({ onClick }) => {
  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
};
MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
