import React from 'react';
import styled from 'styled-components';
import { Wrapper, Label } from '../views/shared';
import { DatePicker } from 'antd';
import SearchInput from './SearchInput/SearchInput';

const SearchController = () => (
  <Wrapper>
    <Label>시작일자</Label>
    <DatePicker />
    <Label>종료일자</Label>
    <DatePicker />
    <Label>카테고리</Label>
    <SearchInput />
    <Label>키워드</Label>
    <SearchInput />
  </Wrapper>
);

export default SearchController;
