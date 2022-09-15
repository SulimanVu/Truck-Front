import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
};

export const signin = createAsyncThunk(
  "signin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = fetch("http://localhost:3030/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSignUp = createAsyncThunk("auth/signUp", async ({name, phone, mail, login, password}, thunkAPI) => {
  try {
    const res = fetch("http://localhost:3030/user/registr", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({name, phone, mail, login, password})
    })
    const json = await res.json();


    if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
    }

        return json;
  } catch(e) {
    thunkAPI.rejectWithValue(e)
  }
})

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(signin.fulfilled, (state, action) => {
      state.token = action.payload;
    })
    .addCase(authSignUp.fulfilled, (state, action) => {
      state.token = action.payload
    })
  },
});

export default applicationSlice.reducer;
