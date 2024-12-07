import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

export const ProviderToolkit = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
};
