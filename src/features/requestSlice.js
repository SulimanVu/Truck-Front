import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  request: [],
  mapRoute: [],
};

export const fetchRequest = createAsyncThunk(
  "fetch/request",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/request");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRequest = createAsyncThunk(
  "add/request",
  async (
    { car, user, from, to, latLngFrom, latLngTo, km, kg, price },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:3030/request", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          car,
          user,
          from,
          to,
          latLngFrom,
          latLngTo,
          km,
          kg,
          price,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteRequest = createAsyncThunk(
  'delete/request',
  async (id, thunkAPU) => {
    const response = await fetch(`http://localhost:3030/request/${id}`, {
      method: 'DELETE',
    })
    const data = response.json()
    return data
  }
)

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    saveRoute: (state, action) => {
      state.mapRoute = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequest.fulfilled, (state, action) => {
        state.request = action.payload;
      })
      .addCase(addRequest.fulfilled, (state, action) => {
        state.request.push(action.payload);
      })
      .addCase(deleteRequest.fulfilled, (state, action) => {
        state.request = state.request.filter(item => item._id !== action.payload._id)
      })
  },
});

export const { saveRoute } = requestSlice.actions;

export default requestSlice.reducer;
