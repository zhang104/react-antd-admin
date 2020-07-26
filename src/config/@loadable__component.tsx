import { Options } from '@loadable/component';
import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  fallback: (
    <Wrapper>
      <Spin delay={200} />
    </Wrapper>
  ),
} as Options<{}>;
