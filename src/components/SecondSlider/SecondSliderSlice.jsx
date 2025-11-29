import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategoriesAPI } from "../../Api/SecondSliderApi";

export const fetchCategories = createAsyncThunk(
  'SecondSlider/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategoriesAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const SecondSliderSlice = createSlice({
  name: "SecondSlider",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectCategories = (state) => state.SecondSlider.items;
export const selectCategoriesStatus = (state) => state.SecondSlider.status;
export const selectCategoriesError = (state) => state.SecondSlider.error;

export default SecondSliderSlice.reducer;