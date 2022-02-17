import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../views/shared';
import { TIMEUNIT, DEVICE, AGE, GENDER } from '../../constants/index';

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const OptionContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: cetter;
`;

const OptionLabel = styled.label`
  margin-right: 10px;
`;

const FlexBlock = styled.div`
  display: flex;
`;

const CheckBox = ({ checkedItems, setCheckedItems }) => {
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
      console.log('체크 반영 완료');
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
      console.log('체크 해제 반영 완료');
    }
  };

  const handleDeviceCheck = (checked) => {
    if (checked) {
      const idArray = [];
      DEVICE.forEach((el) => idArray.push(el));
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  };

  const handleGenderCheck = (checked) => {
    if (checked) {
      const _idArray = [];
      GENDER.forEach((el) => _idArray.push(el));
      setCheckedItems(_idArray);
    } else {
      setCheckedItems([]);
    }
  };

  return (
    <CheckBoxWrapper>
      <OptionContainer>
        <OptionLabel>구간단위</OptionLabel>
        {TIMEUNIT.map((item, index) => {
          return (
            <div>
              <input
                type={'checkbox'}
                onChange={(e) =>
                  handleSingleCheck(e.currentTarget.checked, e.currentTarget.id)
                }
                checked={checkedItems.includes(item) ? true : false}
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
            <div>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleSingleCheck(e.currentTarget.checked, e.currentTarget.id)
                }
                checked={checkedItems.includes(item) ? true : false}
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
            onChange={(e) => handleDeviceCheck(e.target.checked)}
            checked={
              checkedItems.length === DEVICE.length &&
              checkedItems.includes('pc' || '모바일')
                ? true
                : false
            }
            id={DEVICE}
          />
          <label>all</label>
          {DEVICE.map((item, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleSingleCheck(
                      e.currentTarget.checked,
                      e.currentTarget.id
                    )
                  }
                  checked={checkedItems.includes(item) ? true : false}
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
            onChange={(e) => handleGenderCheck(e.target.checked)}
            checked={
              checkedItems.length === GENDER.length &&
              checkedItems.includes('남' || '녀')
                ? true
                : false
            }
            id={GENDER}
          />
          <label>both</label>
          {GENDER.map((item, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleSingleCheck(
                      e.currentTarget.checked,
                      e.currentTarget.id
                    )
                  }
                  checked={checkedItems.includes(item) ? true : false}
                  id={item}
                  key={index}
                />
                <label>{item}</label>
              </div>
            );
          })}
        </FlexBlock>
      </OptionContainer>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
