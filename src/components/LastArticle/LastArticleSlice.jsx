import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/articles');
      if (!response.ok) throw new Error(`خطای HTTP: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const LastArticlesSlice = createSlice({
  name: "articles",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const selectArticles = (state) => state.articles.items;
export const selectArticlesStatus = (state) => state.articles.status;
export const selectArticlesError = (state) => state.articles.error;

export default LastArticlesSlice.reducer;