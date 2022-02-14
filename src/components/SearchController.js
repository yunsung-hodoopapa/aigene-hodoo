import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../views/shared/Wrapper';
import { DatePicker } from 'antd';
import { Label } from '../views/shared/Label';

const SearchController = () => (
  <Wrapper>
    <Label>시작일자</Label>
    <DatePicker />
    <Label>종료일자</Label>
    <DatePicker />
    <Label>카테고리</Label>
    <select />
    <Label>키워드</Label>
    <select />
  </Wrapper>
);

export default SearchController;
