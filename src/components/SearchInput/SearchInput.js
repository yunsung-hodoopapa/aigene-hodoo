import { AirlineSeatFlat } from '@material-ui/icons';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  jusitify-content: center;
  wrap: no-wrap:
  width: 70%;
  border: 1px solid tomato;
`;

const HashTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 4px;
`;

const TagHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  line-height: 20px;
  margin-right: 5px;
  padding: 3px;
  background-color: grey;
  border-radius: 5px;
  font-size: 1em;
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

const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.8em;
  height: 0.8em;
  margin-left: 10px;
  background-color: grey;
  border: none;
  border-radius: 50%;
  :hover {
    background-color: #d3959b;
  }
`;

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [tagContainer, setTagContainer] = useState([]);

  const handleUserInput = useCallback(
    (keyword) => {
      setKeyword(keyword);
      setResults([]);
    },
    [keyword]
  );

  const handleKeyword = (keyword) => {
    setTagContainer([...tagContainer, keyword]);
    setResults([])
    setKeyword('')
  }

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
        <Result key={index} item={item} onClick={() => handleKeyword(item)}>
          {item}
        </Result>
      </ul>
    );
  });

  const handlekeyEventHandler = (e) => {
    if (e.keyCode === 13) {
      searchResultHandler(keyword);
      setTagContainer([...tagContainer, keyword]);
      setKeyword('');
    }
    if (tagContainer.length && e.keyCode === 8 && !keyword.length) {
      setTagContainer(tagContainer.slice(0, tagContainer.length - 1));
    }
  };

  const handleRemoveTag = (index) => {
    setTagContainer(tagContainer.filter((item, i) => i !== index));
  };

  useEffect(() => {
    searchResultHandler(keyword);
  }, [keyword]);

  return (
    <Wrapper>
      <HashTagWrapper>
        {tagContainer.map((item, index) => {
          return (
            <TagHolder key={index} onClick={() => handleRemoveTag(index)}>
              {item}
              <CloseBtnWrap>
                <AiOutlineClose
                  index={index}
                  onClick={(index) => handleRemoveTag(index)}
                />
              </CloseBtnWrap>
            </TagHolder>
          );
        })}
        <Input
          type="text"
          onChange={(e) => handleUserInput(e.target.value)}
          value={keyword}
          placeholder={'Category'}
          onkeyDown={handlekeyEventHandler}
        />
      </HashTagWrapper>
      {results.length > 0 ? (
        <ResultContainer>{renderResults}</ResultContainer>
      ) : null}
    </Wrapper>
  );
};

export default SearchInput;
