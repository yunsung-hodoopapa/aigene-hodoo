import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox/CheckBox';
import KeywordContainer from './Keyword/KeywordContainer';

const ControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

const DataController = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <ControllerWrapper>
      <KeywordContainer />
      <CheckBox
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
    </ControllerWrapper>
  );
};

export default DataController;
