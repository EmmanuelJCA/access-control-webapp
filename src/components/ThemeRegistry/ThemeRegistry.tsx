'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Cookies from 'js-cookie';

import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { lightTheme, darkTheme } from '@/themes';

interface Props {
  children: ReactNode;
  isDarkMode: boolean | undefined;
}

export const ThemeRegistry:FC<Props> = ({ children, isDarkMode: darkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);  

  const changePrefersDarkMode = (prefersDark: boolean) => {
    Cookies.set('prefersDarkMode', prefersDark.toString())
    setIsDarkMode(prefersDark);
  }
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if(typeof(Cookies.get('prefersDarkMode'))) changePrefersDarkMode(mediaQuery.matches)
    
    mediaQuery.addEventListener("change", (event) => {
      changePrefersDarkMode(event.matches)
    })
    
  }, [])
  

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme }>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}