import { configureStore } from "@reduxjs/toolkit";

import usersDataSlice from "./users/usersDataSlice";
import currentUserDataSlice from "./users/currentUserDataSlice";

const store = configureStore({
  reducer: {
    usersData: usersDataSlice,
    currentUserData: currentUserDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
