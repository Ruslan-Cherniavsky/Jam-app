import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Alert, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import axios from "axios";

function Registration() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [configPassword, setConfigPassword] = useState("");

  const [userName, setUserName] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [musicalGaners, setMusicalGaners] = useState("");
  const [musicalInstruments, setMusicalInstruments] = useState("");

  const [references, setReferences] = useState("");
  const [oboutMe, setOboutMe] = useState("");

  const errorHandler = (errorName: any) => {
    setError(errorName);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const sendButtonHandler = async () => {
    if (!userMail) return errorHandler("Plese enter user name");

    if (!userPassword) return errorHandler("Plese enter password");
    if (!configPassword) return errorHandler("Plese enter config password");

    if (userPassword !== configPassword)
      return errorHandler("PASSWORD IS NOT MATCH!!");
    const payload = {
      email: userMail,
      userName: userName,
      password: userPassword,
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      street: street,
      age: age,
      gender: gender,
      musicalGaners: musicalGaners,
      musicalInstruments: musicalInstruments,
      references: references,
      oboutMe: oboutMe,
    };
    try {
      const { data } = await axios.post(
        `http://localhost:3500/users/signup`,
        payload
      );
      setUserMail("");
      setUserPassword("");
      setConfigPassword("");
      setUserName("");
      setFirstName("");
      setLastName("");
      setCountry("");
      setCity("");
      setStreet("");
      setAge("");
      setGender("");
      setMusicalGaners("");
      setMusicalInstruments("");
      setReferences("");
      setOboutMe("");

      alert("NEW USER REGISTERED!!");
      return data;
    } catch (err) {
      console.log(err);
    }
  };
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

            <h4 className="center-align">Registration</h4>
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
                value={userName}
                fullWidth
                id="standard-multiline-static"
                label="User Name"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setUserName(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={firstName}
                fullWidth
                id="standard-multiline-static"
                label="First Name"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={lastName}
                fullWidth
                id="standard-multiline-static"
                label="Last Name"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={country}
                fullWidth
                id="standard-multiline-static"
                label="Country"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setCountry(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={city}
                fullWidth
                id="standard-multiline-static"
                label="City"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setCity(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={street}
                fullWidth
                id="standard-multiline-static"
                label="Street"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setStreet(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={age}
                fullWidth
                id="standard-multiline-static"
                label="Age"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setAge(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={gender}
                fullWidth
                id="standard-multiline-static"
                label="Gender"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setGender(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={musicalGaners}
                fullWidth
                id="standard-multiline-static"
                label="Music Geners"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setMusicalGaners(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={musicalInstruments}
                fullWidth
                id="standard-multiline-static"
                label="Music Instruments"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setMusicalInstruments(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={references}
                fullWidth
                id="standard-multiline-static"
                label="Influasers"
                multiline
                rows={3}
                variant="standard"
                onChange={(e) => setReferences(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <TextField
                value={oboutMe}
                fullWidth
                id="standard-multiline-static"
                label="About me"
                multiline
                rows={3}
                variant="standard"
                onChange={(e) => setOboutMe(e.target.value)}
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
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <br />
            </div>
            <div className="form">
              <TextField
                value={configPassword}
                fullWidth
                id="standard-multiline-static"
                label="Password config"
                multiline
                rows={1}
                variant="standard"
                onChange={(e) => setConfigPassword(e.target.value)}
              />
              <br />
            </div>

            <div className="form">
              <Button
                className="col s2 m2 offset-m3 2 offset-l5 teal lighten-2 "
                variant="contained"
                onClick={sendButtonHandler}
              >
                Register
              </Button>
            </div>

            <div className="center-align">
              <Link to="/">Back to Login Page</Link>
            </div>
          </Grid>

          <Grid item xl={5} lg={4} md={3} sm={2} xs={1}></Grid>
        </Grid>
      </Box>
    </>
  );
}
export { Registration };
