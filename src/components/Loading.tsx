import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading: React.FC = () => (
  <Wrapper>
    <ReactLoading color="#1890ff" />
  </Wrapper>
);

export default Loading;
