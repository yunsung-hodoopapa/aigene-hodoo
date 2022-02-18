import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setKeyword,
  setCategory,
  setResults,
  eraseResult,
} from '../../../redux/keyword';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  jusitify-content: center;
  wrap: no-wrap:
  width: 70%;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 4px;
`;

const Input = styled.input`
  background-color: #ffffff;
  outline: none;
  border: none;
  font-size: 1em;
`;

const ResultContainer = styled.div`
  border: 1px solid grey;
  background-color: #ffffff;
  z-index: 100;
`;
const Result = styled.li`
  padding: 5px 2px;
  margin-bottom: 5px;
  font-size: 1em;
  list-style: none;
`;

const SearchInput = () => {
  const keywordState = useSelector((state) => state.keyword);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleUserInput = useCallback(
    (e) => {
      setInputValue(e.target.value);
      dispatch(eraseResult());
    },
    [inputValue]
  );

  const handleKeyword = useCallback(
    (e) => {
      dispatch(setKeyword(e.target.value));
    },
    [dispatch]
  );

  const handleInputValue = (inputValue) => {
    const regex = /[^0-9]/g;
    const categoryNum = inputValue.toString().replace(regex, '');
    dispatch(setCategory(categoryNum));
    dispatch(eraseResult());
    setInputValue(keywordState.category);
  };

  const searchResultHandler = (keyword) => {
    const data = [
      '핸드메이드코트(50000813)',
      '남성코트(50000839)',
      '스킨토너(50000437)',
      '트레이닝복(50000841)',
    ];
    const matched = data.filter((item) => matchItem(item, inputValue));
    if (matched.length > 0) {
      dispatch(setResults(matched));
    }
  };

  const matchItem = (item, inputValue) => {
    const matchedNum = inputValue
      .toLowerCase()
      .indexOf(item.toLowerCase().substring(0, inputValue.length));
    if (inputValue === '') {
      return false;
    } else {
      if (matchedNum >= 0) {
        return item;
      }
    }
  };

  const renderResults = keywordState.results.map((item, index) => {
    return (
      <ul key={index}>
        <Result key={index} item={item} onClick={() => handleInputValue(item)}>
          {item}
        </Result>
      </ul>
    );
  });

  useEffect(() => {
    searchResultHandler(inputValue);
  }, [inputValue]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          onChange={handleUserInput}
          value={inputValue}
          placeholder={'Category'}
        />
      </InputWrapper>
      {keywordState.results.length > 0 && (
        <ResultContainer>{renderResults}</ResultContainer>
      )}
      <br />
      <InputWrapper>
        <Input
          type="text"
          onChange={handleKeyword}
          value={keywordState.keyword}
          placeholder={'키워드'}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default SearchInput;
