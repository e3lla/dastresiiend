import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListProductsAPI } from "../../Api/ListProductsApi";

export const fetchListProducts = createAsyncThunk(
  'ListProducts/fetchListProducts',
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
  name: "ListProducts",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addListProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
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

export const { addListProduct } = ListProductsSlice.actions;
export const selectListProducts = (state) => state.ListProducts.items;
export const selectListProductsStatus = (state) => state.ListProducts.status;
export const selectListProductsError = (state) => state.ListProducts.error;

export default ListProductsSlice.reducer;