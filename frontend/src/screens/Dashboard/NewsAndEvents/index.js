import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

import {
  ActionAreaCard,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../../components";
import { getAllNews } from "../../../apis/newsAndEvents";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
  },
}));

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: { md: "1fr 1fr 1fr" },
    gap: 2,
  },
};

const list = [
  {
    _id: 1,
    image: require("../../../assets/images/SLIDER_IMAGE_1.jpg"),
    title: "A news which is created for testing purpose",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Grama Niladhari",
    visibility: "Public",
  },
  {
    _id: 2,
    image: require("../../../assets/images/SLIDER_IMAGE_2.jpg"),
    title: "A test title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Grama Niladhari",
    visibility: "Public",
  },
  {
    _id: 2,
    image: require("../../../assets/images/SLIDER_IMAGE_2.jpg"),
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Grama Niladhari",
    visibility: "406, Galpothugoda",
  },
];

const NewsAndEvents = () => {
  const classes = useStyles();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNews()
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant={"h4"}>Manage News and Events</Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Stack>
      <Box marginTop={2}>
        <Button variant="contained">Ceate</Button>
        {/* <Button variant="contained" sx={{ marginLeft: 1 }}>Create a bulk of users</Button> */}
      </Box>
      <Box
        className={classes.container}
        marginBottom={10}
        sx={styles.container}
      >
        {events.map((item) => (
          <ActionAreaCard item={item} key={item._id} />
        ))}
      </Box>
    </Box>
  );
};

export default NewsAndEvents;
