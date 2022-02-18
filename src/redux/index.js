import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import timeSlice from './date';
import keywordSlice from './keyword';
import checkBoxSlice from './checkBox';
import dataSlice from './data';

export default configureStore({
  reducer: {
    date: timeSlice,
    keyword: keywordSlice,
    checkBox: checkBoxSlice,
    data: dataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
