import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  Button,
  dividerClasses,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { cloneElement, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Images } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { removeAllValues } from "../../utils/localStorage";
import {
  setAccessTokenAction,
  setUserAction,
} from "../../store/actions/authActions";

const navigationItems = [
  {
    _id: 1,
    name: "Home",
    path: "/",
  },
  {
    _id: 2,
    name: "Dashboard",
    path: "/dashboard",
  },
  // {
  //   _id: 3,
  //   name: "News",
  //   path: "/news",
  // },
];

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img alt={"logo"} className={classes.logo} src={Images.logo} />
      <Typography variant={"h5"}>Divisional Secretariat</Typography>
    </div>
  );
};

const Header = (props) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const user = useSelector((state) => state.auth.user);

  const matches = useMediaQuery("(min-width:800px)");

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const onOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    removeAllValues();
    dispatch(setAccessTokenAction(null));
    handleClose();
  };

  return (
    <React.Fragment>
      <AppBar position={"static"}>
        <Toolbar disableGutters>
          {matches ? (
            <Logo />
          ) : (
            <IconButton
              onClick={onOpenDrawer}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginLeft: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Tabs
            onChange={handleChange}
            className={classes.tabContainer}
            value={value}
            textColor={"inherit"}
          >
            {matches &&
              navigationItems
                .filter((navItem) => user || navItem._id !== 2)
                .map((navItem) => (
                  <Tab
                    className={classes.tab}
                    label={navItem.name}
                    key={navItem._id}
                    LinkComponent={Link}
                    to={navItem.path}
                  />
                ))}
          </Tabs>
          {user ? (
            <>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ marginRight: 2 }}
              >
                <Avatar alt={user?.displayName} src={user?.profilePicture} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              sx={styles.button}
              variant={"contained"}
              color={"secondary"}
              classes={classes.button}
              LinkComponent={Link}
              to={"/sign-in"}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClose={onCloseDrawer}>
        <img alt={"logo"} className={classes.logo} src={Images.logo} />
        <Typography variant={"65"}>Divisional Secretariat</Typography>
        <List>
          {navigationItems.map((navItem) => (
            <ListItemButton
              key={navItem._id}
              component={Link}
              to={navItem.path}
              onClick={onCloseDrawer}
            >
              {/* <MenuIcon /> */}
              <ListItemIcon>
                <ListItemIcon>{navItem.name}</ListItemIcon>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    // ...theme.mixins.toolbar,
  },
  logo: {
    width: 1750 / 40,
    height: 1750 / 40,
    marginRight: 15,
    marginLeft: 15,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    // ...theme.pallete.typography.tab,
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
  },
  logoContainer: {
    display: "inline-flex",
    alignItems: "center",
  },
}));

const styles = {
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
  },
};
