import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const CloseButton = ({ onClick }) => {
  return (
    <IconButton
      edge="end"
      color="inherit"
      onClick={onClick}
      sx={{
        alignSelf: "flex-end",
        marginRight: 2,
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
