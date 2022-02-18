import { createSlice } from '@reduxjs/toolkit';

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState: {
    keyword: '',
    category: '',
    results: [],
  },
  reducers: {
    setKeyword: (state, action) => {
      console.log(action);
      state.keyword = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setResults: (state, action) => {
      state.results.push(action.payload);
    },
    eraseResult: (state) => {
      state.results = [];
    },
  },
});

export const {
  setKeyword,
  setCategory,
  setResults,
  eraseResult,
} = keywordSlice.actions;

export default keywordSlice.reducer;
