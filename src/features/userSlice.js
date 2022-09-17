import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const fetchUser = createAsyncThunk(
    "fetch/users",
    async(_, thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:3030/users")
            const data = await res.json()
            return data
        } catch (error) {
           return thunkAPI.rejectWithValue(error)
        }
    }
);

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchUser.fulfilled, (state, action)=>{
                state.users = action.payload
            })
    }
})

export default userSlice.reducer