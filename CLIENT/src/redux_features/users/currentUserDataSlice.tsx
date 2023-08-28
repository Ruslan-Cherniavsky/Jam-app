import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../store'

interface CurrentUserDataSlice {
    userName: string,
    userRole: string
    userId: string
}

const initialState: CurrentUserDataSlice = {
    userName: '',
    userRole: '',
    userId: '',

}

const currentUserDataSlice = createSlice({
    name: 'currentUserData',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        resetUserName: (state) => {
            state.userName = ''
        },
        setUserRole: (state, action) => {
            state.userRole = action.payload;
        },
        resetUserRole: (state) => {
            state.userRole = ''
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        resetUserId: (state) => {
            state.userId = ''
        }
    }
})

export const { setUserName, resetUserName, setUserRole, resetUserRole, setUserId, resetUserId } = currentUserDataSlice.actions
export default currentUserDataSlice.reducer;

export const selecUserName = (state: RootState) => state.currentUserData.userName
export const selecUserRole = (state: RootState) => state.currentUserData.userRole
export const selecUserId = (state: RootState) => state.currentUserData.userId