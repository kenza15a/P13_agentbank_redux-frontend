import { createSlice } from '@reduxjs/toolkit';

import authMiddleware from './middlewares/authMiddlware';


//to keep the session opened 
const initialToken = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

const initialState = {
    // Initialize the form data here
    token: initialToken,
    isloggedIn: false,
    submitError: null, //sending errors
    //signin form values
    formValues: {//a remplacer
        user: '',//userName 
        password: '' //password
    },
    //error messages
    validationErrors: {

    },
    loginStatus: '',
    isSubmitting: false,



    // ...

}


const login = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
/*
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.submitError = null;
            state.formValues.user = action.payload.user;
            state.formValues.password = action.payload.password
        },
        loginFailure(state, action) {
            state.isloggedIn = false;
            state.token = null;
            state.submitError = action.payload.error;
        },
      */
        setLogged: (state) => {
            if (state.formValues.user && state.formValues.password) {
                state.isloggedIn = true;
            }
        },
        logout: (state) => {
            state.formValues.user = null;
            state.formValues.password = null;
            localStorage.removeItem('user')
            localStorage.removeItem('password')
            state.isloggedIn = false;
        },

        setValidationErrors: (state, action) => {
            state.validationErrors = action.payload;
        },
        setIsSubmitting: (state, action) => {
            state.isSubmitting = action.payload;
        },
        setSubmitError: (state, action) => {
            state.submitError = action.payload;
        },

    },

    extraReducers: (builder) => {
        builder.addCase(authMiddleware.pending, (state) => {
            state.loginStatus = 'pending';
            state.formValues = { user: '', password: '' };
            state.submitError = null;

        });
        builder.addCase(authMiddleware.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.submitError = null;
            state.loginStatus = 'success';
            state.formValues.user = action.payload.user;
            state.formValues.password = action.payload.password

        });
        builder.addCase(authMiddleware.rejected, (state, action) => {

            state.isloggedIn = false;
            state.token = null;
            state.submitError = action.payload;
            state.loginStatus = "failed"


        });
    }
});

export const { setLogged, logout, loginSuccess, loginFailure, logoutSuccess, setValidationErrors, setIsSubmitting, setSubmitError } = login.actions;

export default login.reducer;