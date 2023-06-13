import auth from './slices/authSlice'
import profileSlice from './slices/profileSlice'
//import edit from './editformslice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import authMiddleware from './middlewares/authMiddlware'

const routReducer = combineReducers({
    auth: auth,
    profileSlice: profileSlice

})
const store = configureStore({
    reducer: routReducer,

})
export default store;
