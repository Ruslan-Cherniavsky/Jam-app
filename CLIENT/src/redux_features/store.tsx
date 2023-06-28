import { configureStore } from "@reduxjs/toolkit";
import vacationsFilterSlice from "./vacations/vacationsFilterSlice";
import vacationsDataSlice from "./vacations/vacationsDataSlice";
import userDataSlice from "./users/vacationsUserDataSlice";

import jamersDataSlice from "./jamers/jamersDataSlice";

const store = configureStore({
  reducer: {
    filter: vacationsFilterSlice,
    vcData: vacationsDataSlice,
    userData: userDataSlice,

    jamersData: jamersDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
