import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    notification: {
        open: false,
        message: "",
        type: "Info",
    },
    isPageBusy: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        showNotification(state, payload) {
            state.notification = {
                open: true,
                message: payload.payload.message,
                type: payload.payload.type,
            };
        },
        closeNotification(state) {
            state.notification = {
                open: false,
            };
        },

        togglePageBusy(state) {
            state.isPageBusy = !state.isPageBusy;
        },
    },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
