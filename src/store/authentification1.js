import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';



//to keep the session opened 
const initialToken = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

const initialState = {
    // Initialize the form data here
    token: initialToken,
    isloggedIn: false,
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
    submitError: null,

    // ...

}

export const loginuser = createAsyncThunk(
    "auth/loginUser",
    async (user, { rejectWithValue }) => {
        try {
            const token = await authService.login(user.userName, user.password);
            localStorage.setItem("token", token.data);
            return token.data;
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
);
const login = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        // Define action creators to update the form data
        setUserName: (state, action) => {
            state.formValues.user = action.payload;
        },
        setPassword: (state, action) => {
            state.formValues.password = action.payload;
        },
        setLogged: (state) => {
            if (state.formValues.user && state.formValues.password) {
                state.isloggedIn = true;

            }
            return state

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
        // ...
    },

    extraReducers: (builder) => {
        builder.addCase(loginuser.pending, (state, action) => {
            return { ...state, loginStatus: "pending" };
        });
        builder.addCase(loginuser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = action.payload;
                return {
                    ...state,
                    token: action.payload,
                    userName: user.userName,
                    loginStatus: 'fulfilled',
                    isloggedIn: true
                };
            } else return state;
        });
        builder.addCase(loginuser.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: "rejected",
                submitError: action.payload,
            };
        });
    }
});

export const { loginUser, setUserName, setPassword, setLogged, logout, setValidationErrors, setIsSubmitting, setSubmitError } = login.actions;

export default login.reducer;