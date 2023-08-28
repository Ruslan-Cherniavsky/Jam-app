import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UsersDataSlice {
  data: any;
  status: boolean;
}

const initialState: UsersDataSlice = {
  data: [],
  status: true,
};

const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.data = action.payload;
    },
    setUsersDataUpdated: (state) => {
      state.status = !state.status;
    },
  },
});

export const { setUsersData, setUsersDataUpdated } = usersDataSlice.actions;
export default usersDataSlice.reducer;

// export const selectCount = (state: RootState) => state.vcData.data;
