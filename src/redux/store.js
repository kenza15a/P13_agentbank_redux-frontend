import auth from './slices/authSlice'
//import edit from './editformslice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import authMiddleware from './middlewares/authMiddlware'

const reducer = combineReducers({
    auth,
    // edit
})
const store = configureStore({

    reducer: reducer,

    //  middleware: [authMiddleware]

})
export default store;
