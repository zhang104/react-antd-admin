import loadable from '@loadable/component';
import React from 'react';
import { useParams } from 'react-router-dom';

import options from 'config/@loadable__component';

const AsyncPage = loadable(
  (props: { page: string }) => import(`./${props.page}`),
  options
);

export default () => {
  const { version } = useParams<{ version: string }>();
  return <AsyncPage page={version} />;
};
