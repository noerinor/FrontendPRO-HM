import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotels } from "../api/hotelApi";

export const fetchHotelsAsync = createAsyncThunk(
  "hotels/fetchHotels",
  async (searchParams) => {
    const response = await fetchHotels(searchParams);
    return response;
  }
);

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHotelsAsync.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.loading = false; //
      })
      .addCase(fetchHotelsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotelSlice.reducer;
