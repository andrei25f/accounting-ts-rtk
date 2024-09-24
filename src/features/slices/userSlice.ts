import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../utils/types";

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserProfile,
    reducers: {
        putUser: (_state, action) => action.payload,
        deleteUser: () => {}
    }
})

export const { putUser, deleteUser } = userSlice.actions

export default userSlice.reducer