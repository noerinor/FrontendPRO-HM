import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotels } from "../api/hotelApi";

export const fetchHotelsThunk = createAsyncThunk(
  "search/fetchHotels",
  async (formData) => {
    const response = await fetchHotels(formData);
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    hotels: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelsThunk.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.loading = false;
      })
      .addCase(fetchHotelsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default searchSlice.reducer;
