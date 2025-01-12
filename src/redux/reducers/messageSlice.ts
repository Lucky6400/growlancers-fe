import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message",
    initialState: {
        currentUser: null
    },
    reducers: {
        setUser(state, action) {
            state.currentUser = action.payload
        }
    }
})

export const { setUser } = messageSlice.actions
