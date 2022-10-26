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

const AddUser = ({ open, onClose }) => {
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
          Add User
        </Typography>
        <Stack
          direction={"row"}
          gap={1}
          marginTop={2}
          justifyContent={"space-between"}
        >
          <Box flex={1} paddingRight={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[]}
              sx={styles.textField}
              renderInput={(params) => (
                <TextField {...params} label="Sub Division" />
              )}
            />
            {/* <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[]}
              sx={{ ...styles.textField, marginTop: 3 }}
              renderInput={(params) => <TextField {...params} label="Role" />}
            /> */}
            <FormControl required sx={{ ...styles.textField, marginTop: 3 }}>
              <InputLabel id="demo-simple-select-required-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                // value={age}
                label="Age *"
                // onChange={handleChange}
              >
                <MenuItem value="USER">User</MenuItem>
                <MenuItem value={"GN"}>Grama Niladhari</MenuItem>
                <MenuItem value={"GSN"}>Gowjana Sewa Niladhari</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box justifyContent={"center"} alignItems={"center"}>
            <IconButton onClick={onClickProfileIcon}>
              <Avatar
                alt="Image"
                src={image ? URL.createObjectURL(image) : DEFAULT_IMAGE}
                // src={DEFAULT_IMAGE}
                sx={{ width: 115, height: 115 }}
              />
              <input
                type="file"
                id="image"
                ref={inputFile}
                onChange={handleImageSelect}
                style={{ display: "none" }}
              />
            </IconButton>
          </Box>
        </Stack>
        <Stack direction={"row"} gap={3} justifyContent={"space-between"}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            margin={"normal"}
            // value={username}
            // onChange={onChangeUsername}
            sx={styles.textField}
            // className={classes.textField}
          />
          <TextField
            id="outlined-basic"
            label="Display Name"
            variant="outlined"
            margin={"normal"}
            // value={username}
            // onChange={onChangeUsername}
            sx={styles.textField}
            // className={classes.textField}
          />
        </Stack>
        <Stack direction={"row"} gap={3} justifyContent={"space-between"}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin={"normal"}
            // value={username}
            // onChange={onChangeUsername}
            sx={styles.textField}
            // className={classes.textField}
          />
          <TextField
            id="outlined-basic"
            label="NIC"
            variant="outlined"
            margin={"normal"}
            // value={username}
            // onChange={onChangeUsername}
            sx={styles.textField}
            // className={classes.textField}
          />
        </Stack>
        <Stack direction={"row"} gap={3} justifyContent={"space-between"}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            margin={"normal"}
            // value={username}
            // onChange={onChangeUsername}
            sx={styles.textField}
            // className={classes.textField}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            margin={"normal"}
            // value={username}
            // onChange={onChangeUsername}
            sx={styles.textField}
            // className={classes.textField}
          />
        </Stack>
        <LoadingButton
          // onClick={onSignIn}
          // loading={loading}
          loadingIndicator="Loading..."
          variant="contained"
          sx={styles.loadingButton}
          margin={"normal"}
        >
          ADD
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default AddUser;

const DEFAULT_IMAGE =
  process.env.DEFAULT_IMAGE ||
  "https://drive.google.com/uc?export=view&id=1r9PvYShxwSmAsdWZDbncW41jmMvov-LW";

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
    minWidth: 500,
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
    marginTop: 2,
  },
};
