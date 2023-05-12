import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = "localhost:3001/api/v1/user/"

const authMiddleware = createAsyncThunk(
    'my/postRequest',
    async (requestData) => {
        try {
            const response = await axios.post(apiUrl + 'login', requestData);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);
export default authMiddleware;