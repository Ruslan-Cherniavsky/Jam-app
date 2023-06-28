import React from "react";
import { useState, useEffect } from "react";
import { JemmersRow } from "./jemmersRow";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux_features/store";

import axiosInstance from "../../server/index.axios";

function JammersList() {
  const [dataLocal, setData] = useState([]);

  const dataFetch = async () => {
    try {
      const { data } = await axiosInstance.get(
        `http://localhost:3500/users/getallusers`
      );
      setData(data.users);
      console.log(data.users);

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
            <table>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
              </tr>

              {
                // @ts-ignore
                dataLocal.map((e) => (
                  // @ts-ignore
                  <JemmersRow key={e._id} {...e} />
                ))
              }
            </table>
          </Grid>

          <Grid item xl={5} lg={4} md={3} sm={2} xs={1}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export { JammersList };
