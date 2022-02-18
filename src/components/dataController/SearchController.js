import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox/CheckBox';
import KeywordContainer from './Keyword/KeywordContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../redux/data';
const ControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

const DataController = () => {
  const dispatch = useDispatch();

  const { dataState, checkBoxState, keywordState, dateState } = useSelector(
    (state) => ({
      dateState: state.date.value,
      checkBoxState: state.checkBox,
      keywordState: state.keyword,
      dataState: state.data,
    })
  );

  console.log(dataState);

  const getTimeToString = (date) => {
    const toCalendarData = new Date(date);
    return (
      toCalendarData.getFullYear() +
      '-' +
      (toCalendarData.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      toCalendarData.getDate().toString().padStart(2, '0')
    );
  };

  const checkDeviceOption = () => {
    if (checkBoxState.device.length === 2) {
      return '';
    } else {
      if (checkBoxState.device.length > 0) {
        return checkBoxState.device.toString();
      }
    }
  };

  const checkGenderOption = () => {
    if (checkBoxState.gender.length === 2) {
      return '';
    } else {
      if (
        checkBoxState.gender.length &&
        checkBoxState.gender.toString() === '남'
      ) {
        return 'm';
      } else {
        return 'f';
      }
    }
  };

  const checkAgeOption = () => {
    return checkBoxState.age.map((item) => item.toString());
  };

  const requestBody = {
    startDate: getTimeToString(dateState.startDate),
    endDate: getTimeToString(dateState.endDate),
    timeUnit: checkBoxState.timeUnit.toString(),
    category: keywordState.category,
    keyword: keywordState.keyword,
    device: checkDeviceOption(),
    gender: checkGenderOption(),
    ages: checkAgeOption(),
  };

  const onCreate = (requestBody) => {
    // console.log(requestBody);
    dispatch(addData(requestBody));
  };

  return (
    <ControllerWrapper>
      <KeywordContainer />
      <CheckBox />
      <button onClick={() => onCreate(requestBody)} />
    </ControllerWrapper>
  );
};

export default DataController;
