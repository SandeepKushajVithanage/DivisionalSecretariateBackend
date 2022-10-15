import {
  Container,
  TextField,
  Typography,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Navigate, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import { firebaseApp } from "../../configs/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAccessTokenAction } from "../../store/actions/authActions";
import { setValue } from "../../utils/localStorage";
import { Keys } from "../../constants";

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

const SignIn = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const navigate = useNavigate();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const user = useSelector((state) => state.auth.user);

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    setLoading(true);
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setValue(Keys.ACCESS_TOKEN, user.accessToken);
        dispatch(setAccessTokenAction(user.accessToken));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onGoogleSignIn = () => {
    const auth = getAuth(firebaseApp);

    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onFacebookSignIn = () => {
    const auth = getAuth(firebaseApp);

    const provider = new FacebookAuthProvider();
    provider.addScope("user_birthday");

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Container className={classes.container} maxWidth={"sm"}>
        <Typography className={classes.title} color={"primary"} variant={"h2"}>
          SIGN IN
        </Typography>
        <div className={classes.form}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin={"normal"}
            value={username}
            onChange={onChangeUsername}
            className={classes.textField}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            variant="outlined"
            margin={"normal"}
            className={classes.textField}
            type="password"
            onChange={onChangePassword}
            autoComplete="current-password"
          />
          <div style={{}}>
            <a
              variant="a"
              href={"#"}
              style={{
                textAlign: "right",
                marginLeft: "77%",
                color: "black",
              }}
            >
              Forgot Password?
            </a>
          </div>

          <div className={classes.signInBtnContainer}>
            <LoadingButton
              onClick={onSignIn}
              loading={loading}
              loadingIndicator="Loading..."
              variant="contained"
              className={classes.textField}
              margin={"normal"}
            >
              Sign In
            </LoadingButton>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              gap={1}
              marginTop={3}
            >
              <LoadingButton
                variant="contained"
                className={classes.textField}
                sx={{ backgroundColor: "red" }}
                onClick={onGoogleSignIn}
              >
                <GoogleIcon sx={{ color: "white" }} />
                <Typography color={"white"} marginLeft={2}>
                  Google
                </Typography>
              </LoadingButton>
              <LoadingButton
                variant="contained"
                className={classes.textField}
                sx={{ backgroundColor: "blue" }}
                onClick={onFacebookSignIn}
              >
                <FacebookIcon sx={{ color: "white" }} />
                <Typography alignSelf={"right"} color={"white"} marginLeft={2}>
                  Facebook
                </Typography>
              </LoadingButton>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
