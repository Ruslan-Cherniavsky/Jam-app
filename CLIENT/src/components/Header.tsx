import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import { RootState, AppDispatch } from "../redux_features/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUserId } from "../redux_features/users/currentUserDataSlice";

import dataAxios from "../server/data.axios";

import { Link } from "react-router-dom";



import {
  setUserName,
  resetUserName,
  setUserRole,
  resetUserRole,
  resetUserId,
} from "../redux_features/users/currentUserDataSlice";

const pages = ["Jamers", "Jam-Events", "About"];
const settings = ["Profile", "My Jam Events", "Create Jam Event"];


function clearTokenLS(token: any) {
  if (!token) return;
  localStorage.removeItem("token");
}

function getTokenLS() {
  return localStorage.getItem("token");
}

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const [localUserId, setlocalUserId] = useState<any>(null);
  const [userNameLocal, setuserNameLocal] = useState<any>(null);

  const globalUserName: any = useSelector((state: RootState) => state.currentUserData.userName);
  const globalUserId: any = useSelector((state: RootState) => state.currentUserData.userId);

  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // const userRole = useSelector((state: RootState) => state.jamersData.userRole);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget); };
  const handleCloseUserMenu = () => { setAnchorElUser(null); };

  const handleNavigate = (setting: any) => {
    setAnchorElUser(null);

  };


  useEffect(() => {
    if (typeof (getTokenLS()) === 'string') {
      const fetchData = async () => {
        const userData = await dataAxios.userDataFetch();
          dispatch(setUserId(userData._id))
          dispatch(setUserName(userData.userName))
          dispatch(setUserRole(userData.userRole))
      }
      fetchData()
        .catch(console.error);
    }
  }, []);



  function clearTokenLS(token: any) {
    if (!token) return;
    localStorage.removeItem("token");
  }

  function getTokenLS() {
    return localStorage.getItem("token");
  }

  const logOut = () => {
    setAnchorElUser(null);

    const currentToken = getTokenLS();
    clearTokenLS(currentToken);
    dispatch(resetUserName());
    dispatch(resetUserRole());
    dispatch(resetUserId());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MusicVideoIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          {/* Desktop Left Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            Jam-Jam
          </Typography>

          {/* Mobile Left Menu + Icon */}


          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left", }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left", }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, }}>

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>

          {/* Mobile left Icon */}
          <MusicVideoIcon sx={{
            display: {
              xs: "none", sm: "none", md: "none",
              justifyContent: "center",
            }, mr: 1
          }}
          />

          {/* Mobile Logo  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "flex", md: "none" },
              // justifyContent: "center",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            Jam-Jam
          </Typography>


          {/* Desktop left buttons (jamers jam events) Logo  */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button href="/"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Desktop user name  */}

          {globalUserName ? <Typography
            sx={{ display: { xs: "none", md: "flex" } }}
            variant="h5"
            noWrap
            margin={"0px 15px 0px 0px"}
            component="a"> Hi {globalUserName} </Typography> : null}

          {/* Mobile user name  */}

          {globalUserName ? <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}
            variant="h5"
            noWrap
            margin={"0px 15px 0px 0px"}
            component="a"> Hi {globalUserName} </Typography> : null}




          {typeof (getTokenLS()) === "string" ?
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>


              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>

                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleNavigate(setting)}
                    component="a"
                    href={`/${encodeURIComponent(setting.toLowerCase().replace(/\s+/g, '-'))}/${globalUserId}`}
                  >
                    <Typography
                      noWrap
                      sx={{
                        textDecoration: 'none',
                        color: "inherit",
                      }}>{setting} </Typography>
                  </MenuItem>

                ))}

                <MenuItem
                  component="a"
                  href='/'
                  onClick={() => logOut()}>
                  <Typography sx={{
                    textDecoration: 'none',
                    color: "inherit"
                  }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box> : null}
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Header;
