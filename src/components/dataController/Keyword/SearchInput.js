import { AirlineSeatFlat } from '@material-ui/icons';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setKeyword,
  setResults,
  eraseResult,
  setTagContainer,
  deleteTag,
  removeTag,
} from '../../../redux/keyword';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  jusitify-content: center;
  wrap: no-wrap:
  width: 70%;
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
  const keywordState = useSelector((state) => state.keyword);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleUserInput = useCallback(
    (keyword) => {
      setKeyword(keyword);
      dispatch(eraseResult());
    },
    [keyword]
  );

  const handleKeyword = (keyword) => {
    dispatch(setTagContainer(keyword));
    dispatch(eraseResult());
    setKeyword('');
  };

  const searchResultHandler = (keyword) => {
    const data = ['패션', '생활', '맛집', '카페']; // 예제
    const matched = data.filter((item) => matchItem(item, keyword));
    if (matched.length > 0) {
      dispatch(setResults(matched));
    }
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

  const renderResults = keywordState.results.map((item, index) => {
    return (
      <ul key={index}>
        <Result key={index} item={item} onClick={() => handleKeyword(item)}>
          {item}
        </Result>
      </ul>
    );
  });

  const handlekeyEventHandler = (e) => {
    if (e.keyCode === 13) {
      searchResultHandler(keyword);
      setTagContainer(keyword);
      setKeyword('');
    }
    if (
      keywordState.tagContainer.length &&
      e.keyCode === 8 &&
      !keyword.length
    ) {
      dispatch(removeTag());
    }
  };

  // const handleRemoveTag = (index) => {
  //  ;
  // };

  useEffect(() => {
    searchResultHandler(keyword);
  }, [keyword]);

  return (
    <Wrapper>
      <HashTagWrapper>
        {keywordState.tagContainer.map((item, index) => {
          return (
            <TagHolder key={index} onClick={() => dispatch(deleteTag(index))}>
              {item}
              <CloseBtnWrap>
                <AiOutlineClose
                  item={item}
                  index={index}
                  onClick={() => dispatch(deleteTag(index))}
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
      {keywordState.results.length > 0 && (
        <ResultContainer>{renderResults}</ResultContainer>
      )}
    </Wrapper>
  );
};

export default SearchInput;
