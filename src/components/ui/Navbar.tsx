'use client'
import NextLink from 'next/link';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useColorScheme } from '@/hooks';

export const Navbar = () => {

  const { isDarkMode, setIsDarkMode } = useColorScheme();

  return (
    <AppBar>
      <Toolbar
        sx={{
          display: 'flex', 
          justifyContent: 'space-between' 
        }}
      >
        <Link component={ NextLink } href="/" underline='none' color="white">
          <Typography variant='h6'>Access-control-app</Typography>
        </Link>
        {
          !isDarkMode
            ? <DarkMode sx={{ cursor: 'pointer' }} onClick={() => setIsDarkMode(true)}/>
            : <LightMode sx={{ cursor: 'pointer' }} onClick={() => setIsDarkMode(false)}/>
        }
      </Toolbar>
    </AppBar>
  )
}
