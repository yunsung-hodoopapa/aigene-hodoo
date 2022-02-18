import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContentsWrapper, Label, Wrapper } from '../../../views/shared/index';
import SearchInput from './SearchInput';

const KeywordContainer = () => {
  return (
    <ContentsWrapper>
      <Wrapper>
        <Label>키워드</Label>
        <SearchInput />
      </Wrapper>
    </ContentsWrapper>
  );
};

export default KeywordContainer;
