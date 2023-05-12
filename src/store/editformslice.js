import { createSlice } from "@reduxjs/toolkit";
const editForm = createSlice({
    name: 'edit',
    initialState: {
        // Initialize the form data here
        isShown: false,
        user: localStorage.getItem('user'),
        password: localStorage.getItem('password'),

        // ...
    },
    reducers: {
        // Define action creators to update the form data
        setUserName: (state, action) => {
            state.user = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsShown: (state) => {
            state.isShown = !state.isShown;

        }

        // ...
    },
});
export const { setUserName, setPassword, setIsShown } = editForm.actions;
export default editForm.reducer;