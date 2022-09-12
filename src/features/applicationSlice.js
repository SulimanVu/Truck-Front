import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem('token')
}
