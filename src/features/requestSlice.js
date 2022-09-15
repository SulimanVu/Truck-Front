import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  request: [],
};

export const fetchRequest = createAsyncThunk(
    "fetch/request",
    async(_, thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:3030/request")
            const data = await res.json()
            return data
        } catch (error) {
           return thunkAPI.rejectWithValue(error)
        }
    }
);

const requestSlice = createSlice({
    name:'request',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchRequest.fulfilled, (state, action)=>{
                state.request = action.payload
            })
    }
})

export default requestSlice.reducer