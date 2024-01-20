import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as __nameVar__APIs from "./__name__.api";
import { I__Name__State } from "./__name__.type";

// First, create the thunk
export const fetch__Name__List = createAsyncThunk(
  "__name__/list/fetch",
  async () => {
    const response = await __nameVar__APIs.fetch__Name__List();
    return response.data;
  }
);

const __nameVar__Slice = createSlice({
  name: "__name__",
  initialState: {
    list: [],
    queryStatus: "",
    mutationStatus: "",
    mutationResponse: undefined,
  } as I__Name__State,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setNew__Name__(state, action) {
      return { ...state, __name__: action.payload };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetch__Name__List.pending, (state) => {
      state.queryStatus = "";
    });
    builder.addCase(fetch__Name__List.fulfilled, (state, action) => {
      state.list = action.payload;
      state.queryStatus = "";
    });
    builder.addCase(fetch__Name__List.rejected, (state) => {
      state.queryStatus = "";
    });
  },
});

export const { setNew__Name__ } = __nameVar__Slice.actions;

export default __nameVar__Slice.reducer;
/* eslint-enable no-param-reassign */
