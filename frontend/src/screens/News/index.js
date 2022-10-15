import { Box, Stack } from "@mui/material";
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
    display: "grid",
    gridTemplateColumns: { md: "1fr 1fr 1fr" },
    gap: 2,
  },
};

const News = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container} marginBottom={10} sx={styles.container}>
      {/* <ActionAreaCard />
            <ActionAreaCard />
            <ActionAreaCard />
            <ActionAreaCard />
            <ActionAreaCard />
            <ActionAreaCard /> */}
    </Box>
  );
};

export default News;
