import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, headers } from '../constants/index';

export const addData = createAsyncThunk('POST/INSIGHT', async (data) => {

  const response = await axios.post('/v1/datalab/shopping/category/age',
    JSON.stringify(data),
    { headers }
  );
  return response.data;
});

export const dataSlice = createSlice({
  name: 'dataList',
  initialState: [],
  reducers: {},
  extraReducers: {
    [addData.fulfilled]: (state, { payload }) => [...state, payload],
  },
});

export default dataSlice.reducer;
