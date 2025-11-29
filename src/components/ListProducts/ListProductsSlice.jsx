// src/components/ListProductsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListProductsAPI } from "../Api/ListProductsApi";

export const fetchListProducts = createAsyncThunk(
  'listProducts/fetchListProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchListProductsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ListProductsSlice = createSlice({
  name: "listProducts",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchListProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectListProducts = (state) => state.listProducts.items;
export const selectListProductsStatus = (state) => state.listProducts.status;
export const selectListProductsError = (state) => state.listProducts.error;

export default ListProductsSlice.reducer;
