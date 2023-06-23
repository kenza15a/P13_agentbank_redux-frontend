import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import profileService from '../../services/profileService'

const initialState = {
    firstName: '',
    lastName: '',
    isLoading: false,
    isSuccess: false,
    profileMessage: '',
    updateError:'',
    isEditVisible: false
    //EROR
}

export const getProfileData = createAsyncThunk('profile/getProfileData', async (thunkAPI) => {
    try {
        const reponse = await profileService.getUserData();


        return reponse;


    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        return thunkAPI.rejectWithValue(message)
    }
});
export const updateprofile = createAsyncThunk('profile/updateprofile', async (userData, thunkAPI) => {
    try {
        const reponse = await profileService.editProfile(userData);
        return reponse;

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
        setEditVisible: (state) => {
            state.isEditVisible = !state.isEditVisible;

        },

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
                state.profileMessage = "failed"

            })
            .addCase(updateprofile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.firstName = action.payload.firstName
                state.lastName = action.payload.lastName
                state.isEditVisible = false;
            })
            .addCase(updateprofile.pending, (state) => {
                state.isLoading = true;
                state.updateError = "Update pending...."
            
            })
            .addCase(updateprofile.rejected, (state) => {
                state.updateError = "fail to update"
                state.isLoading = false;
            })


    },


})

export const { setEditVisible } = profileSlice.actions
export default profileSlice.reducer
