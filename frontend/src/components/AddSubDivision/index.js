import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { LoadingButton } from "@mui/lab";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardMedia from "@mui/material/CardMedia";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const AddSubDivision = ({ open, onClose }) => {
  const inputFile = useRef();

  const [image, setImage] = useState(null);

  const onClickProfileIcon = () => {
    inputFile.current.click();
  };

  const handleImageSelect = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.container}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          align="center"
        >
          Add Sub Division
        </Typography>
        <Stack
          direction={"row"}
          gap={1}
          marginTop={2}
          justifyContent={"space-between"}
        >
          <CardMedia
            component="img"
            height="150"
            width={"200"}
            src={DEFAULT_COVER_IMAGE}
            alt="image"
          />
        </Stack>
        <Stack
          direction={"row"}
          marginTop={1}
          gap={3}
          justifyContent={"space-between"}
        >
          <Box flex={1}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              margin={"normal"}
              // value={username}
              // onChange={onChangeUsername}
              sx={styles.textField}
              // className={classes.textField}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[]}
              sx={{ ...styles.textField, marginTop: 2 }}
              renderInput={(params) => (
                <TextField {...params} label="Grama Sewa Niladhari" />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[]}
              sx={{ ...styles.textField, marginTop: 3 }}
              renderInput={(params) => (
                <TextField {...params} label="Gowijana Sewa Niladhari" />
              )}
            />
          </Box>
          <Box flex={1}>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              margin={"normal"}
              // value={username}
              // onChange={onChangeUsername}
              sx={{ ...styles.textField, height: 50 }}
              // className={classes.textField}
              multiline
              rows={7.4}
              maxRows={4}
            />
            {/* <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"
              style={{ width: 200 }}
            /> */}
          </Box>
        </Stack>
        <LoadingButton
          // onClick={onSignIn}
          // loading={loading}
          loadingIndicator="Loading..."
          variant="contained"
          sx={styles.loadingButton}
          margin={"normal"}
        >
          SAVE
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default AddSubDivision;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
  },
  form: {
    // flexDirection: 'column',
    marginTop: 30,
  },
  textField: {
    width: "100%",
    height: 50,
  },
  signInBtnContainer: {
    marginTop: 20,
  },
}));

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 900,
    minHeight: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  textField: {
    width: "100%",
    height: 50,
  },
  loadingButton: {
    width: "100%",
    height: 52,
    marginTop: 3,
  },
};

const DEFAULT_COVER_IMAGE =
  "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000";
