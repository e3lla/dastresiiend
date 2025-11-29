import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBrandsAPI } from "../../Api/FavoriteApi";

export const fetchBrands = createAsyncThunk(
  'Favorite/fetchBrands',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchBrandsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const FavoriteSlice = createSlice({
  name: "Favorite",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectBrands = (state) => state.Favorite.items;
export const selectBrandsStatus = (state) => state.Favorite.status;
export const selectBrandsError = (state) => state.Favorite.error;

export default FavoriteSlice.reducer;