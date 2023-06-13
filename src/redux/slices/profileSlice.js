import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import profileService from '../../services/profileService'
//const firstName = localStorage.getItem('firstName') || sessionStorage.getItem('firstName');
//const lastName = localStorage.getItem('lastName') || sessionStorage.getItem('lastName');
const initialState = {
    firstName: '',
    lastName: '',
    isLoading: false,
    isSuccess: false,
    profileMessage: ''
    //EROR
}

export const getProfileData = createAsyncThunk('profile/getProfileData', async (thunkAPI) => {
    try {
        const reponse = await profileService.getUserData();


        return reponse;
        // nAVIGATE ICI SELON LA REPONSE 

    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
});
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder

            .addCase(getProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.firstName = action.payload.firstName
                state.lastName = action.payload.lastName
            })
            .addCase(getProfileData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProfileData.rejected, (state) => {
                state.firstName = ""
                state.lastName = ""
                state.isSuccess = false
                state.message = "failed"

            })


    },


})


export default profileSlice.reducer
