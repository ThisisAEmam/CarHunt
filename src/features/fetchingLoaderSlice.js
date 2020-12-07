import { createSlice } from "@reduxjs/toolkit";

export const fetchingLoaderSlice = createSlice({
  name: "fetchingLoader",
  initialState: false,
  reducers: {
    setFetchingLoaderShown: (state, action) => (state = action.payload),
  },
});

export const { setFetchingLoaderShown } = fetchingLoaderSlice.actions;

export default fetchingLoaderSlice.reducer;
