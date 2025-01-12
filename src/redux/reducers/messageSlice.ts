import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    currentMsg: Message | null
}

const initialState: InitialState = { currentMsg: null }

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setUser(state, action) {
            state.currentMsg = action.payload;
        },
        addMessage(state, action) {
            // Adding the new message to the existing messages array
            if (state.currentMsg) {
                state.currentMsg.messages.push(action.payload);
            }
        }
    }
});

export const { setUser, addMessage } = messageSlice.actions;
