import { configureStore } from '@reduxjs/toolkit';
import timeSlice from './day';
import keywordSlice from './keyword';
import checkBoxSlice from './checkBox';

export default configureStore({
  reducer: {
    date: timeSlice,
    keyword: keywordSlice,
    checkBox: checkBoxSlice,
  },
});
