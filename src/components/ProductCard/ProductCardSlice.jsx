// src/components/ProductCard/ProductCardSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSliderProductsAPI } from "../Api/ProductCardApi";

export const fetchSliderProducts = createAsyncThunk(
  'sliderProducts/fetchSliderProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchSliderProductsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ProductCardSlice = createSlice({
  name: "sliderProducts",
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSliderProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSliderProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectSliderProducts = (state) => state.sliderProducts.items;
export const selectSliderProductsStatus = (state) => state.sliderProducts.status;
export const selectSliderProductsError = (state) => state.sliderProducts.error;

export default ProductCardSlice.reducer;
