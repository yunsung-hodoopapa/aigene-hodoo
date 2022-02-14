import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-directionL: column;
  jusitify-content: center;
  wrap: no-wrap:
`;
const Input = styled.input`
  background-color: #ffffff;
  outline: none;
  font-size: 1em;
  z-index: 100;
`;
const ResultContainer = styled.div`
  border: 1px solid tomato;
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
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleUserInput = useCallback(
    (keyword) => {
      setKeyword(keyword);
      setResults([]);
    },
    [keyword]
  );

  const searchResultHandler = (keyword) => {
    const data = ['패션', '생활', '맛집', '카페']; // 예제
    const matched = data.filter((item) => matchItem(item, keyword));
    setResults(matched);
  };

  const matchItem = (item, keyword) => {
    const matchedNum = keyword
      .toLowerCase()
      .indexOf(item.toLowerCase().substring(0, keyword.length));
    if (keyword === '') {
      return false;
    } else {
      if (matchedNum >= 0) {
        return item;
      }
    }
  };

  const renderResults = results.map((item, index) => {
    return (
      <ul>
        <Result key={index} item={item} onClick={() => handleUserInput(item)}>
          {item}
        </Result>
      </ul>
    );
  });

  const handlekeyEventHandler = (e) => {
    if (e.keyCode === 13) {
      searchResultHandler(keyword);
    }
  };

  useEffect(() => {
    searchResultHandler(keyword);
  }, [keyword]);

  return (
    <Wrapper>
      <div>
        <Input
          type="text"
          onChange={(e) => handleUserInput(e.target.value)}
          value={keyword}
          placeholder={'Category'}
          onkeyDown={handlekeyEventHandler}
        />
      </div>
      {results.length > 0 ? (
        <ResultContainer>{renderResults}</ResultContainer>
      ) : null}
    </Wrapper>
  );
};

export default SearchInput;
