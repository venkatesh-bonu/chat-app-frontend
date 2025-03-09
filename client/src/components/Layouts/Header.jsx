import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../ constants/colors";
import React, { Suspense, lazy, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogOutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationsDialog = lazy(()=> import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../specific/NewGroup"))

const IconBtn = (title, icon, onClick) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const logoutHandler = () => {
    console.log("logged out");
  };

  const navigateToGroup = () => navigate("/groups");

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chattu
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {IconBtn("search", <SearchIcon />, openSearch)}
              {IconBtn("New group", <AddIcon />, openNewGroup)}
              {IconBtn("search", <GroupIcon />, navigateToGroup)}
              {IconBtn("Notification", <NotificationsIcon />, openNotification)}
              {IconBtn("Logout", <LogOutIcon />, logoutHandler)}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {
        isNotification && (
          <Suspense fallback ={<Backdrop open />}>
            <NotificationsDialog />
          </Suspense>
        )
      }
      {
        isNewGroup && (
          <Suspense fallback ={<Backdrop open />}>
            <NewGroupDialog />
          </Suspense>
        )
      }
    </>
  );
};

export default Header;
