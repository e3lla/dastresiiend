import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDividerProductsAPI } from "../Api/DividerApi";

export const fetchDividerProducts = createAsyncThunk(
  'dividerProducts/fetchDividerProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchDividerProductsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const DividerProductsSlice = createSlice({
  name: "dividerProducts",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDividerProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDividerProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDividerProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectDividerProducts = (state) => state.dividerProducts.items;
export const selectDividerProductsStatus = (state) => state.dividerProducts.status;
export const selectDividerProductsError = (state) => state.dividerProducts.error;

export default DividerProductsSlice.reducer;
