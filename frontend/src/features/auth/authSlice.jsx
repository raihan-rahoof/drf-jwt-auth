import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    user: user ? user : null,
    userInfo: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const register = createAsyncThunk(
    "auth/register",
    async (userData) => {
       console.log(userData);
    }
)

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{

    }
})


export default authSlice.reducer