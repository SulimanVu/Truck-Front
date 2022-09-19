import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("id"),
  loader: false,
};

export const authSignIn = createAsyncThunk(
  "auth/signn",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, phone, mail, login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/user/registr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, mail, login, password }),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }

      return json;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(authSignIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.id;
      state.token = false;
    })
    .addCase(authSignIn.pending, (state, action) => {
      state.token = true;
    })
    .addCase(authSignIn.rejected, (state, action) => {
      state.token = false;
    })
    .addCase(authSignUp.fulfilled, (state, action) => {
      state.token = action.payload;
      state.loader = false
    })
    .addCase(authSignUp.pending, (state, action) => {
      state.loader = true
    })
    .addCase(authSignUp.rejected, (state, action) => {
      state.loader = false
    })
  },
});

export default applicationSlice.reducer;
