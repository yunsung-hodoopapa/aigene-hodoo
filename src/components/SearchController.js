import { set } from 'date-fns';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper, Label } from '../views/shared';
import DatePickerComponent from './DatePicker';
import SearchInput from './SearchInput/SearchInput';

const SearchController = () => {
  const [isRangeSearch, setIsRangeSearch] = useState(false);
  const [dateInput, setDateInput] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  console.log(dateInput);

  return (
    <Wrapper>
      <DatePickerComponent
        isRangeSearch={isRangeSearch}
        setIsRangeSearch={setIsRangeSearch}
        dateInput={dateInput}
        setDateInput={setDateInput}
      />
      <Label>카테고리</Label>
      <SearchInput />
      <Label>키워드</Label>
      <SearchInput />
    </Wrapper>
  );
};

export default SearchController;
