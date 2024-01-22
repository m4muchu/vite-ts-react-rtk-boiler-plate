import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as AuthAPIs from "./auth.api";
import { IAuthState } from "./auth.type";

// First, create the thunk
export const fetchAuthList = createAsyncThunk("auth/list/fetch", async () => {
  const response = await AuthAPIs.fetchAuthList();
  return response.data;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    list: [],
    queryStatus: "",
    dataInteractionStatuses: {},
  } as IAuthState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setNewAuth(state, action) {
      return { ...state, auth: action.payload };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAuthList.pending, (state) => {
      state.queryStatus = "";
    });
    builder.addCase(fetchAuthList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.queryStatus = "";
    });
    builder.addCase(fetchAuthList.rejected, (state) => {
      state.queryStatus = "";
    });
  },
});

export const { setNewAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
/* eslint-enable no-param-reassign */
