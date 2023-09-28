'use client';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NextAppDirEmotionCacheProvider from './EmotionCache';
import { darkTheme, lightTheme } from '@/themes';
import { getCookieItem } from '@/utils/cookies';
import { useColorScheme } from '@/hooks';

interface Props {
  children: ReactNode;
  isDarkMode: boolean | undefined;
}

export default function ThemeRegistry({ children, isDarkMode: darkMode }: Props) {

  const { isDarkMode, setIsDarkMode } = useColorScheme();
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if(getCookieItem('prefersDarkMode') === null) setIsDarkMode(mediaQuery.matches);
    
    mediaQuery.addEventListener("change", (event) => {
      setIsDarkMode(event.matches)
    });
    
  }, []);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={
        isDarkMode == null
          ? darkMode ? darkTheme : lightTheme 
          : isDarkMode ? darkTheme : lightTheme 
      }>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}