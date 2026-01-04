import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.cities.includes(action.payload)) {
        state.cities = state.cities.filter(c => c !== action.payload);
      } else {
        state.cities.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.cities));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
