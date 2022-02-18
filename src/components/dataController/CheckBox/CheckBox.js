import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentsWrapper } from '../../../views/shared';
import { TIMEUNIT, DEVICE, AGE, GENDER } from '../../../constants/index';
import DatePickerComponent from './DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTimeUnit,
  setDevice,
  setAge,
  setGender,
  unCheckTimeUnit,
  eraseDeviceUnit,
  unCheckDeviceUnit,
  eraseGenderUnit,
  unCheckAgeUnit,
  unCheckGenderUnit,
} from '../../../redux/checkBox';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: flex-start;
`;
const OptionContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: flex-start;
  margin-bottom: 1em;
`;

const OptionLabel = styled.label`
  margin-right: 10px;
`;

const FlexBlock = styled.div`
  display: flex;
`;

const CheckBox = () => {
  const checkBoxState = useSelector((state) => state.checkBox);
  const dispatch = useDispatch();

  const handleTimeUnitChecked = (checked, item, index) => {
    if (checked) {
      dispatch(setTimeUnit(item));
    } else {
      dispatch(unCheckTimeUnit(index));
    }
  };

  const handleDeviceUnitChecked = (checked, item, index) => {
    if (checked) {
      dispatch(setDevice(item));
    } else {
      dispatch(unCheckDeviceUnit(index));
    }
  };

  const handleGenderUnitChecked = (checked, item, index) => {
    if (checked) {
      dispatch(setGender(item));
    } else {
      dispatch(unCheckGenderUnit(index));
    }
  };

  const handleAgeUnitChecked = (checked, item, index) => {
    if (checked) {
      dispatch(setAge((index+1)*10));
    } else {
      dispatch(unCheckAgeUnit(index));
    }
  };

  const handleDeviceUnitAllChecked = (checked) => {
    if (checked) {
      DEVICE.forEach((el) => dispatch(setDevice(el)));
    } else {
      dispatch(eraseDeviceUnit());
    }
  };

  const handleGenderUnitAllCheck = (checked) => {
    if (checked) {
      GENDER.forEach((el) => dispatch(setGender(el)));
    } else {
      dispatch(eraseGenderUnit());
    }
  };

  return (
    <ContentsWrapper>
      <FlexWrapper>
        <DatePickerComponent />
        <OptionContainer>
          <OptionLabel>구간단위</OptionLabel>
          {TIMEUNIT.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type={'checkbox'}
                  onChange={(e) =>
                    handleTimeUnitChecked(e.target.checked, item, index)
                  }
                  checked={checkBoxState.timeUnit.includes(item) ? true : false}
                  id={item}
                  key={index}
                />
                <label>{item}</label>
              </div>
            );
          })}
        </OptionContainer>
        <OptionContainer>
          <OptionLabel>연령대</OptionLabel>
          {AGE.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleAgeUnitChecked(e.target.checked, item, index)
                  }
                  checked={checkBoxState.age.includes((index+1)*10) ? true : false}
                  id={item}
                  key={index}
                />
                <label>{item}</label>
              </div>
            );
          })}
        </OptionContainer>
        <OptionContainer>
          <OptionLabel>디바이스</OptionLabel>
          <FlexBlock>
            <input
              type="checkbox"
              onChange={(e) => handleDeviceUnitAllChecked(e.target.checked)}
              checked={
                checkBoxState.device.length === DEVICE.length &&
                checkBoxState.device.includes('pc' || '모바일')
                  ? true
                  : false
              }
              id={DEVICE}
            />
            <label>all</label>
            {DEVICE.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleDeviceUnitChecked(e.target.checked, item, index)
                    }
                    checked={checkBoxState.device.includes(item) ? true : false}
                    id={item}
                    key={index}
                  />
                  <label>{item}</label>
                </div>
              );
            })}
          </FlexBlock>
        </OptionContainer>
        <OptionContainer>
          <OptionLabel>성별</OptionLabel>
          <FlexBlock>
            <input
              type="checkbox"
              onChange={(e) => handleGenderUnitAllCheck(e.target.checked)}
              checked={
                checkBoxState.gender.length === GENDER.length &&
                checkBoxState.gender.includes('남' || '녀')
                  ? true
                  : false
              }
              id={GENDER}
            />
            <label>all</label>
            {GENDER.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleGenderUnitChecked(e.target.checked, item, index)
                    }
                    checked={checkBoxState.gender.includes(item) ? true : false}
                    id={item}
                    key={index}
                  />
                  <label>{item}</label>
                </div>
              );
            })}
          </FlexBlock>
        </OptionContainer>
      </FlexWrapper>
    </ContentsWrapper>
  );
};

export default CheckBox;
