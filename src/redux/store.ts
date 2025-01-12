import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./reducers/filterslice";
import { messageSlice } from "./reducers/messageSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        message: messageSlice.reducer
    }
})