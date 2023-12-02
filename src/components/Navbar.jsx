import styled from "@emotion/styled";
import { AccountTree, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="backgroundDark" sx={{ color: "white" }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          New App
        </Typography>
        <AccountTree sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>

        <Icons>
          <Badge badgeContent={4} color="primary">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: "30px", height: "30px" }} />
          <Typography variant="span">Carlos</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
