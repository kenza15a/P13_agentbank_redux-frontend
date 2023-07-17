import auth from './slices/authSlice'
import profileSlice from './slices/profileSlice'

import { combineReducers, configureStore } from '@reduxjs/toolkit'


const routReducer = combineReducers({
    auth: auth,
    profileSlice: profileSlice

})
const store = configureStore({
    reducer: routReducer,

})
export default store;
