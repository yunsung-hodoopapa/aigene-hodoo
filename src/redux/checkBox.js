import { createSlice } from '@reduxjs/toolkit';

export const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {
    timeUnit: [],
    device: [],
    age: [],
    gender: [],
  },
  reducers: {
    setTimeUnit: (state, action) => {
      state.timeUnit.push(action.payload);
    },
    setDevice: (state, action) => {
      state.device.push(action.payload);
    },
    setAge: (state, action) => {
      state.age.push(action.payload);
    },
    setGender: (state, action) => {
      state.gender.push(action.payload);
    },
    unCheckTimeUnit: (state, action) => {
      state.timeUnit.splice(action.payload, 1);
    },
    eraseDeviceUnit: (state) => {
      state.device = [];
    },
    unCheckDeviceUnit: (state, action) => {
      state.device.splice(action.payload, 1);
    },
    unCheckGenderUnit: (state, action) => {
      state.gender.splice(action.payload, 1);
    },
    eraseGenderUnit: (state) => {
      state.gender = [];
    },
    unCheckAgeUnit: (state, action) => {
      state.age.splice(action.payload, 1);
    },
  },
});

export const {
  setTimeUnit,
  setDevice,
  setAge,
  setGender,
  eraseDeviceUnit,
  unCheckDeviceUnit,
  unCheckGenderUnit,
  eraseGenderUnit,
  unCheckAgeUnit,
  unCheckTimeUnit,
} = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
