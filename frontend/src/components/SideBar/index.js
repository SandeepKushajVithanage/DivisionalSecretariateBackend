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
import PeopleIcon from "@mui/icons-material/People";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

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
  // {
  //   _id: 7,
  //   name: "Contacts",
  //   path: "/dashboard/contacts",
  // },
];

const Icon = (props) => {
  // return <ArrowForwardIosIcon {...props} />;
  if (props.name === "Users") return <PeopleIcon {...props} />;
  if (props.name === "Sub Divisions") return <ShareLocationIcon {...props} />;
  if (props.name === "News and Events") return <NewspaperIcon {...props} />;
  if (props.name === "Services") return <PlaylistAddCheckIcon {...props} />;
  if (props.name === "Organizations") return <CorporateFareIcon {...props} />;
  if (props.name === "Contacts") return <PeopleIcon {...props} />;
  else return <ArrowForwardIosIcon {...props} />;
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
