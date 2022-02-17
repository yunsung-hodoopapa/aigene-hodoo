import { createSlice } from '@reduxjs/toolkit';

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState: {
    keyword: '',
    tagContainer: [],
    results: [],
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setTagContainer: (state, action) => {
      console.log(action.payload);
      state.tagContainer.push(action.payload);
    },
    setResults: (state, action) => {
      state.results.push(action.payload);
    },
    eraseResult: (state) => {
      state.results = [];
    },
    removeTag: (state) => {
      state.tagContainer.slice(0, state.tagContainer.length - 1);
    },
    deleteTag: (state, action) => {
      state.tagContainer.filter((item, i) => i !== action.payload);
    },
  },
});

export const {
  setKeyword,
  setTagContainer,
  setResults,
  eraseResult,
  removeTag,
  deleteTag,
} = keywordSlice.actions;

export default keywordSlice.reducer;
