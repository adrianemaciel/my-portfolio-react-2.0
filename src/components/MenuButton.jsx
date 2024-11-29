import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

export default MenuButton;
