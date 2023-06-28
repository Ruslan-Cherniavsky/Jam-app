import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface DataSlice {
  data: any;
  status: boolean;
}

const initialState: DataSlice = {
  data: [],
  status: true,
};

const jamersDataSlice = createSlice({
  name: "jamersData",
  initialState,
  reducers: {
    setJamersData: (state, action) => {
      state.data = action.payload;
    },
    setJamersDataUpdated: (state) => {
      state.status = !state.status;
    },
  },
});

export const { setJamersData, setJamersDataUpdated } = jamersDataSlice.actions;
export default jamersDataSlice.reducer;

// export const selectCount = (state: RootState) => state.vcData.data;
