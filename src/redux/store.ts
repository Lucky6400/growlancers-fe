import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./reducers/filterslice";
import { messageSlice } from "./reducers/messageSlice";
import { themeSlice } from "./reducers/themeslice";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        message: messageSlice.reducer,
        theme: themeSlice.reducer
    }
})