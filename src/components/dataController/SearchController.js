import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper, Label } from '../../views/shared/index';
import DatePickerComponent from './DatePicker';
import SearchInput from './SearchInput/SearchInput';
import CheckBox from './CheckBox';

const ControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

const SearchController = () => {
  const [isRangeSearch, setIsRangeSearch] = useState(false);
  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <ControllerWrapper>
      <Wrapper>
        <DatePickerComponent
          isRangeSearch={isRangeSearch}
          setIsRangeSearch={setIsRangeSearch}
          dateInput={dateInput}
          setDateInput={setDateInput}
        />
      </Wrapper>
      <Wrapper>
        <Label>키워드</Label>
        <SearchInput />
        <Label>키워드</Label>
        <SearchInput />
      </Wrapper>
      <Wrapper>
        <CheckBox
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </Wrapper>
    </ControllerWrapper>
  );
};

export default SearchController;
