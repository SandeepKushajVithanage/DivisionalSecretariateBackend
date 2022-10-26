import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ActionAreaCard } from "../../components";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
  },
}));

const styles = {
  container: {
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container} marginBottom={10} sx={styles.container}>
      <Typography variant="h1">404 Not Found</Typography>
    </Box>
  );
};

export default NotFound;
