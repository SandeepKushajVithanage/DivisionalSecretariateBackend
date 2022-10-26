import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Container,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Urls } from "../../constants";
import { getUserRoleName } from "../../utils";

const ActionAreaCard = ({ item }) => {
  console.log(item);
  return (
    <Container maxWidth={"md"}>
      <Card sx={{ marginTop: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            src={
              Urls.FILE_STORAGE +
              item.files.find((element) => element.mimeType === "image/jpeg")
                ?.filePath
            }
            alt="image"
          />
          <CardHeader
            avatar={
              <Avatar
                sx={{}}
                aria-label="recipe"
                alt={item?.author?.dissplayName}
                src={item?.author?.profilePicture}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${getUserRoleName(item?.author?.role)} (${
              item?.visibility ? item?.visibility?.name : "Public"
            })`}
            subheader="September 04, 2022"
          />
          <CardContent sx={{ height: "13em" }}>
            <Typography gutterBottom variant="h5" component="div">
              {item?.title?.substring(0, 50)}
              {item?.title?.length > 50 ? "..." : ""}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.content?.substring(0, 250)}
              {item?.content?.length > 250 ? "..." : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default ActionAreaCard;
