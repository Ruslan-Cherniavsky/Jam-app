// import React from "react";
import { useState, useEffect } from "react";
import EnhancedTable from "../../components/Table";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinearIndeterminate from "../../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux_features/store";
import { setJamersData } from "../../redux_features/jamers/jamersDataSlice";
import dataAxios from "../../server/data.axios";

function JammersTablePage() {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const dataLocal = useSelector((state: RootState) => state.jamersData.data);

  useEffect(() => {
    dataAxios.dataFetch().then((data) => {
      dispatch(setJamersData(data.users));
    });
  }, []);

  return (
    <>
      (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xl={2} lg={2} md={1} sm={0} xs={0}></Grid>

          <Grid
            item
            xl={8}
            lg={8}
            md={10}
            sm={12}
            xs={12}
            className="center-align"
          >
            {dataLocal.length > 1 ? (
              <EnhancedTable rows={dataLocal} />
            ) : (
              <LinearIndeterminate />
            )}
          </Grid>

          <Grid item xl={2} lg={2} md={1} sm={0} xs={0}></Grid>
        </Grid>
      </Box>
      )
    </>
  );
}

export default JammersTablePage;
