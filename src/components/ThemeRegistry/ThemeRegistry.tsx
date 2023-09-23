'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { lightTheme, darkTheme } from '../../themes';

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}