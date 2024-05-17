import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    johnDoe: false,
    peterEngland: false,
    henryPaul: false,
  },
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { filterName } = action.payload;
      state.filters[filterName] = !state.filters[filterName];
    },
  },
});

export const { toggleFilter } = sortSlice.actions;

export const selectFilters = (state) => state.sort.filters;

export default sortSlice.reducer;
