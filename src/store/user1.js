/*import { createSlice } from '@reduxjs/toolkit'
// Slice
const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null //treat the session remains opened problem

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
    },
    reducers: {
        loginSuccess: (state, action) => {

            //il faut appeler le service 
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            localStorage.removeItem('user')
        },
    },
});
export default userSlice.reducer
// Actions
const { loginSuccess, logoutSuccess } = userSlice.actions
export const login = ({ username, password }) => async dispatch => {
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        dispatch(loginSuccess({ username }));
    } catch (e) {
        return console.error(e.message);
    }
}
export const logout = () => async dispatch => {
    try {
        // const res = await api.post('/api/auth/logout/')
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}
*/
