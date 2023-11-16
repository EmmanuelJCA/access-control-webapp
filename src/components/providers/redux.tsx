'use client';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';
import { SnackbarProvider } from 'notistack';

interface Props {
  children: React.ReactNode;
}

export const ReduxProvider:FC<Props> = ({ children }) => {
  return (
    <Provider store={ store }>
      <SnackbarProvider>
        { children }
      </SnackbarProvider>
    </Provider>
  )
}
