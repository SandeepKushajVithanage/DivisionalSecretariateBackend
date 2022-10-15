import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const navigationItems = [
  // {
  //     _id: 1,
  //     name: 'Dashboard',
  //     path: '/dashboard',
  // },
  {
    _id: 2,
    name: "Users",
    path: "/dashboard/",
  },
  {
    _id: 3,
    name: "Sub Divisions",
    path: "/dashboard/sub-divisions",
  },
  {
    _id: 4,
    name: "News and Events",
    path: "/dashboard/news-and-events",
  },
  {
    _id: 5,
    name: "Services",
    path: "/dashboard/services",
  },
  {
    _id: 6,
    name: "Organizations",
    path: "/dashboard/organizations",
  },
  {
    _id: 7,
    name: "Contacts",
    path: "/dashboard/contacts",
  },
];

const Icon = (props) => {
  return <ArrowForwardIosIcon {...props} />;
  if (props.name === "Home") return <Home {...props} />;
  else return <Home {...props} />;
};
const Sidebar = () => {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Box sx={{ display: matches ? "block" : "none" }}>
      <List>
        {navigationItems.map((navItem) => (
          <ListItem disablePadding key={navItem._id}>
            <ListItemButton component={Link} to={navItem.path}>
              <ListItemIcon>
                <Icon name={navItem.name} />
              </ListItemIcon>
              <ListItemText primary={navItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
