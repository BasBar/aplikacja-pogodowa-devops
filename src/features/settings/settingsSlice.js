import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: localStorage.getItem("unit") || "metric",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
      localStorage.setItem("unit", action.payload);
    },
  },
});

export const { setUnit } = settingsSlice.actions;
export default settingsSlice.reducer;
