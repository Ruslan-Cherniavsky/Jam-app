import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import dataAxios from "../../server/data.axios"
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux_features/store";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { setUserName, setUserId, selecUserName, setUserRole } from "../../redux_features/users/currentUserDataSlice";

function Login() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [error, setError] = useState("");

  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const errorHandler = (errorName: any) => {
    setError(errorName);
    setTimeout(() => {
      setError("");
    }, 3000);
  };


  const sendButtonHandler = async () => {
    if (userMail === "") {
      return errorHandler("Plese enter meil");
    }
    if (userPassword === "") {
      return errorHandler("Plese enter  password");
    }

    const payload = {
      email: userMail,
      password: userPassword,
    };

    try {
      const { data } = await axios.post(
        `http://localhost:3500/users/login/`,
        payload
      );
      setTokenLS(data.token);
      setUserMail("");
      setPassword("");

      const userData = await dataAxios.userDataFetch()
      dispatch(setUserId(userData._id))
      dispatch(setUserName(userData.userName))
      dispatch(setUserRole(userData.userRole))

      return
    } catch (err) {
      console.log(err);
      errorHandler("login or password is incorrect!");
      setUserMail("");
      setPassword("");
    }

  };

  function setTokenLS(token: string) {
    if (!token) return;
    localStorage.setItem("token", token);
  }

  function getTokenLS() {
    return localStorage.getItem("token");
  }

  if (typeof getTokenLS() === "string") return <Navigate to="jammersList/" />;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xl={5} lg={4} md={3} sm={2} xs={1}></Grid>

          <Grid
            item
            xl={2}
            lg={4}
            md={6}
            sm={8}
            xs={10}
            className="center-align"
          >
            {error ? (
              <Alert severity="error" className="alert">
                {error}
              </Alert>
            ) : null}

            <h4 className="center-align">Login</h4>
            <div className="center-align">
              <div className="form">
                <TextField
                  value={userMail}
                  fullWidth
                  id="standard-multiline-static"
                  label="Email"
                  multiline
                  rows={1}
                  variant="standard"
                  onChange={(e) => setUserMail(e.target.value)}
                />
                <br />
              </div>

              <div className="form">
                <TextField
                  value={userPassword}
                  fullWidth
                  id="standard-multiline-static"
                  label="Password"
                  multiline
                  rows={1}
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
              <Button
                className="btn"
                variant="contained"
                onClick={sendButtonHandler}
              >
                Login
              </Button>
              <br />
            </div>

            <div className="center-align btn">
              <Link to="/registration">Or register new user</Link>
            </div>
          </Grid>

          <Grid item xl={5} lg={4} md={3} sm={2} xs={1}></Grid>
        </Grid>
      </Box>
    </>
  );
}
export { Login };
