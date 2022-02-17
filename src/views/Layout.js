import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  max-width: 1920px;
  max-height: 1080px;
  min-height: 720px;
  min-width: 1024px;
`;

const Layout = (props) => {
  return <Section>{props.children}</Section>;
};

export default Layout;
