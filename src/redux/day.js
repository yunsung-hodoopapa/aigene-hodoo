import { createSlice } from '@reduxjs/toolkit';

export const timeSlice = createSlice({
  name: 'date',
  initialState: {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      isRangeSearch: false,
      isCalendarOpen: false,
    },
  },
  reducers: {
    setStartDate: (state, action) => {
      state.value = action.payload;
    },
    setEndDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = timeSlice.actions;

export default timeSlice.reducer;
