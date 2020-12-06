import { createSlice } from "@reduxjs/toolkit";

export const carSelectedSlice = createSlice({
  name: "carSelected",
  initialState: { manufacturer: "None", model: "None", year: "None" },
  reducers: {
    setCarSelected: (state, action) => (state = action.payload),
  },
});

export const { setCarSelected } = carSelectedSlice.actions;

export default carSelectedSlice.reducer;
