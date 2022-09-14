import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    car: []

}

export const fetchCar = createAsyncThunk('car/fetch', async(_, thunkAPI) =>  {
    try {
        const res = await fetch('http://localhost:3030/car');

        const car = await res.json();
        return car
    } catch(e) {
        return thunkAPI.rejectWithvalue(e)
    }
}
)
const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchCar.fulfilled, (state, action) => {
                state.car = action.payload;
            })
    }
})


export default  carSlice.reducer