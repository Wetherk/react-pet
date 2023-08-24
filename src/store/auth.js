import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

import { auth } from "../firebase";
import { uiActions } from "./ui";

const user = JSON.parse(localStorage.getItem("user"));
const initialAuthState = {
    user,
    error: null,
    isLoggedInChanged: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setUser(state, action) {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
            state.isLoggedInChanged = true;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

export const createAccount = ({ email, password }) => {
    return (dispatch) => {
        dispatch(uiActions.togglePageBusy());
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { email, displayName, photoURL, accessToken } =
                    userCredential.user;
                dispatch(
                    authActions.setUser({
                        email,
                        displayName,
                        photoURL,
                        accessToken,
                    })
                );
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use")
                    dispatch(
                        uiActions.showNotification({
                            message: "Email already in use",
                            type: "Error",
                        })
                    );
                if (error.code === "auth/invalid-email")
                    dispatch(
                        uiActions.showNotification({
                            message: "Invalid email address",
                            type: "Error",
                        })
                    );
                if (error.code === "auth/invalid-password")
                    dispatch(
                        uiActions.showNotification({
                            message: "Invalid password",
                            type: "Error",
                        })
                    );
            })
            .finally(() => {
                dispatch(uiActions.togglePageBusy());
            });
    };
};

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch(uiActions.togglePageBusy());
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { email, displayName, photoURL, accessToken } =
                    userCredential.user;

                dispatch(
                    authActions.setUser({
                        email,
                        displayName,
                        photoURL,
                        accessToken,
                    })
                );
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found")
                    dispatch(
                        uiActions.showNotification({
                            message: "No user found for this email",
                            type: "Error",
                        })
                    );

                if (error.code === "auth/wrong-password")
                    dispatch(
                        uiActions.showNotification({
                            message: "Wrong password",
                            type: "Error",
                        })
                    );
            })
            .finally(() => {
                dispatch(uiActions.togglePageBusy());
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(uiActions.togglePageBusy());
        signOut(auth)
            .then(() => {
                dispatch(authActions.setUser(null));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                dispatch(uiActions.togglePageBusy());
            });
    };
};
